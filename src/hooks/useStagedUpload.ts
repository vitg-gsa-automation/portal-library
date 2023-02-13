import { useState } from 'react';
import { useUpload } from './files/useUpload';
import { useCheckFileSchema } from './integrations/useCheckFileSchema';
import { useUser } from './useUser';
import { CustomFile, UploadResult } from '../types/files';
import {
  CheckError,
  CheckResultsError,
  PromiseSettledResultsError,
  UploadError,
  UploadResultsError,
} from '../helpers/errors';

interface MultipleUploadFileParams {
  AuthCode: string;
  PackageId: number | string;
  SystemId: number;
}

export function useStagedUpload() {
  const user = useUser();
  const fileUpload = useUpload();
  const checkFileSchema = useCheckFileSchema();

  const [results, setResults] = useState<UploadResult[]>([]);
  const [status, setStatus] = useState<'success' | 'error'>();
  const [error, setError] = useState<PromiseSettledResultsError>();
  const [uploading, setUploading] = useState<boolean>(false);

  const upload = async function (
    files: CustomFile[],
    params: MultipleUploadFileParams
  ) {
    try {
      if (!user?.AuthenticationCode) throw new Error('No authcode provided');
      setUploading(true);
      const checkResults = await checkFileSchema.checkAll(user, files);
      const uploadResults = await fileUpload.uploadAll(files, params);
      const results = generateUploadResults(uploadResults);
      setResults(results);
      setStatus('success');
    } catch (error) {
      if (error instanceof CheckResultsError) {
        const results = checkResultsErrorToUploadResults(error);
        setResults(results);
        setError(error);
      } else if (error instanceof UploadResultsError) {
        const results = uploadResultsErrorToUploadResults(error);
        setResults(results);
        setError(error);
      }
      setStatus('error');
      throw error;
    } finally {
      setUploading(false);
    }
  };

  return {
    checkFileSchema,
    fileUpload,
    error,
    results,
    status,
    upload,
    uploading,
  };
}

export function checkResultsErrorToUploadResults(error: CheckResultsError) {
  const uploadResults: UploadResult[] = error.results.map((result) => {
    if (result.status === 'fulfilled') {
      return {
        file: result.value.file,
        uploaded: false,
        status: 'error',
        message: 'All other OSCAL files must pass schema check',
      };
    } else {
      if (result.reason instanceof CheckError) {
        return {
          file: result.reason.result.file,
          uploaded: false,
          status: 'error',
          message: result.reason.message,
          checkResult: result.reason.result,
        };
      } else if (result.reason instanceof UploadError) {
        return result.reason.result;
      } else throw new Error('cannot determine error type');
    }
  });
  return uploadResults;
}

export function uploadResultsErrorToUploadResults(error: UploadResultsError) {
  return generateUploadResults(error.results);
}

export function generateUploadResults(
  results: PromiseSettledResult<UploadResult>[]
) {
  const uploadResults: UploadResult[] = results.map((result) => {
    if (result.status === 'fulfilled') {
      return result.value;
    } else {
      if (result.reason instanceof UploadError) {
        return result.reason.result;
      } else throw new Error('cannot determine error type');
    }
  });
  return uploadResults;
}
