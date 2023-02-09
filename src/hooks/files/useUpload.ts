import { getErrorMessage } from 'lib/helpers';
import { useState } from 'react';
import useUser from 'hooks/useUser';
import { CustomFile, UploadFileParams, UploadResult } from 'lib/types/files';
import { uploadFile } from 'lib/api/files';
import { UploadError, UploadResultsError } from 'lib/helpers/errors';

interface MultipleUploadFileParams {
  AuthCode: string;
  PackageId: number | string;
  SystemId: number;
}

function useUpload() {
  const user = useUser();
  const [results, setResults] = useState<PromiseSettledResult<UploadResult>[]>(
    []
  );
  const [errors, setErrors] = useState<unknown>();
  const [loading, setLoading] = useState(false);

  const upload = async function (
    file: CustomFile,
    params: UploadFileParams
  ): Promise<UploadResult> {
    try {
      if (!user?.AuthenticationCode) throw new Error('No authcode provided');
      const data = await uploadFile(file, params);
      return {
        file: file,
        status: 'success',
        uploaded: true,
      };
    } catch (error) {
      const message = getErrorMessage(error);
      setErrors(message);
      return Promise.reject(new UploadError(message, file));
    }
  };

  const uploadAll = async function (
    files: CustomFile[],
    params: MultipleUploadFileParams
  ) {
    setLoading(true);
    const promises = files.map((file) => {
      const { description, FileTypeId, docType } = file;
      if (!description) throw new Error('No doc description entered');
      if (!FileTypeId) throw new Error('No FileTypeId entered');
      if (!docType?.value) throw new Error('No document type');
      const uploadParams: UploadFileParams = {
        ...params,
        DocDesc: description,
        FileTypeId: FileTypeId,
        DocObjTypeId: +docType.value,
      };
      return upload(file, uploadParams);
    });
    const results = await Promise.allSettled(promises);
    if (results.some((result) => result.status === 'rejected')) {
      return Promise.reject(
        new UploadResultsError('At least one file failed to upload', results)
      );
    }
    setResults(results);
    setLoading(false);
    return results;
  };

  return {
    loading,
    results,
    errors,
    upload,
    uploadAll,
  };
}
export default useUpload;
