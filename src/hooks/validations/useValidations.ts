import { Document } from 'types/documents';
import { fileLinkToFileName, fileNameToParts } from 'helpers/documents';
import { useUser } from 'hooks/useUser';
import { useCheckFileSchema } from 'hooks/integrations/useCheckFileSchema';
import { useNistValidations } from './useNistValidations';
import { useFedrampValidations } from './useFedrampValidations';
import { useRemoteFile } from 'hooks/files/useRemoteFile';

export function useValidations(doc?: Document) {
  const user = useUser();
  const fileName = fileLinkToFileName(doc?.FileLink || '');
  const [fileIdentifier] = fileNameToParts(fileName) || [];
  const file = useRemoteFile(fileName, fileIdentifier);
  const checkFileSchema = useCheckFileSchema(fileIdentifier);
  const nistValidations = useNistValidations(fileName);
  const fedrampValidations = useFedrampValidations(fileName);

  const validate = async function () {
    if (!file) throw new Error('Your session has timed out. No file.');
    await checkFileSchema.checkFile(file);
    await nistValidations.validateFile(file);
    await fedrampValidations.validateFile(file);
  };
  return { checkFileSchema, nistValidations, fedrampValidations, validate };
}
