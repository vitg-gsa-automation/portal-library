import { useEffect, useState } from 'react';

import { getErrorMessage } from 'lib/helpers';
import { StageStatus } from 'lib/types/validations';
import { CustomFile } from 'lib/types/files';
import { fileNameToParts, isOscal } from 'lib/helpers/documents';
import {
  fetchNistValidations,
  nistValidate,
  uploadToNistValidations,
} from 'lib/api/validations';

interface NistValidateResult {
  UploadFileName?: string;
  Status?: 'success' | 'error';
  Message?: string;
  Link?: string;
}

function getNistStageStatus(
  nistValidateResults: NistValidateResult[]
): StageStatus {
  if (nistValidateResults.length < 1) return 'default';
  const errorExists = nistValidateResults.some(
    (result) => result.Status === 'error'
  );
  const allPass = nistValidateResults.every(
    (result) => result.Status === 'success'
  );
  if (errorExists) return 'error';
  if (allPass) return 'success';
  return 'default';
}

function useNistValidations(fileName?: string) {
  const [results, setResults] = useState<NistValidateResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>();
  const status = getNistStageStatus(results);

  // useEffect(() => {
  //   const start = async function () {
  //     if (!fileName) return;
  //     const errors = await fetchNistValidations(fileName);
  //     setErrors(errors);
  //   };
  //   start();
  // }, [fileName]);

  const validate = async function (file: File): Promise<NistValidateResult> {
    try {
      await uploadToNistValidations(file);
      await nistValidate({
        filename: file.name,
        dirname: 'converter',
        fileoption: 'xml',
      });
      const errors = await fetchNistValidations(file.name);
      if (errors) throw new Error(`errors exist.`);
      return {
        UploadFileName: file.name,
        Status: 'success',
        Message: `${file.name} passed`,
      };
    } catch (error) {
      const message = getErrorMessage(error);
      //we are fullfilling all promises since we are returning from catch block
      return {
        UploadFileName: file.name,
        Status: 'error',
        Message: `${file.name} ${message}`,
        Link: `/dashboard/validate/logs/nist/${file.name}`,
      };
    }
  };

  const validateFile = async function (file: CustomFile) {
    const [, extension] = fileNameToParts(file.name);
    if (extension !== 'xml' && extension !== 'json')
      throw new Error('file extension must be xml or json');
    await uploadToNistValidations(file);
    await nistValidate({
      filename: file.name,
      dirname: 'converter',
      fileoption: extension,
    });
    const errors = await fetchNistValidations(file.name);
    setErrors(errors);
  };

  const validateAll = async function (files: CustomFile[]) {
    const oscalFiles = files.filter(isOscal);
    if (!oscalFiles.length) return;
    setLoading(true);
    const promises = oscalFiles.map((file) => validate(file));
    const results = await Promise.all(promises);
    setResults(results);
    setLoading(false);
    const status = getNistStageStatus(results);
    if (status === 'error')
      throw new Error('one or more files failed NIST validations');
    return status;
  };

  return { results, errors, status, loading, validateFile, validateAll };
}
export default useNistValidations;
