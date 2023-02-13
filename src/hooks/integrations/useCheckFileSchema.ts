import { useState } from 'react';
import { integrationService } from '../../services/integrationService';
import { useUser } from '../../hooks/useUser';
import { isOscal } from '../../helpers/documents';
import { User } from '../../types/users';
import {
  CheckFileSchemaResponse,
  CheckResult,
  StageStatus,
} from '../../types/validations';
import { CustomFile } from '../../types/files';
import { CheckError, CheckResultsError } from '../../helpers/errors';

export interface FileSchemaResult {
  UploadFileName?: string;
  ID?: number;
  Message?: string;
  Status?: 'success' | 'error';
  Link?: string;
}

async function checkFileSchema(user: User, file: File) {
  if (!user.AuthenticationCode) throw new Error('No authcode provided');
  const response = await integrationService.post<[CheckFileSchemaResponse]>(
    '/Check',
    {
      Attachment: file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        AuthCode: user.AuthenticationCode,
      },
    }
  );
  return response.data[0];
}

function getFileSchemaStatus(
  checkFileSchemas: CheckFileSchemaResponse[]
): StageStatus {
  if (checkFileSchemas.length < 1) return 'default';
  const errorExists = checkFileSchemas.some(
    (schema) => schema.Status === 'error'
  );
  const allPass = checkFileSchemas.every(
    (schema) => schema?.Status === 'success'
  );
  if (errorExists) return 'error';
  if (allPass) return 'success';
  return 'default';
}

export function useCheckFileSchema(fileIdentifier?: string) {
  const user = useUser();
  const [results, setResults] = useState<FileSchemaResult[]>([]);
  const [loading, setLoading] = useState(false);
  const status = getFileSchemaStatus(results);
  const [data, setData] = useState<CheckFileSchemaResponse>();
  const [errors, setErrors] = useState<string>();

  const check = async function (
    user: User,
    file: CustomFile
  ): Promise<CheckResult> {
    try {
      if (isOscal(file)) {
        const response = await checkFileSchema(user, file);
        console.log(response);
        if (response?.MsgType?.toLowerCase() === 'error')
          throw new CheckError(
            file,
            'File did not pass basic file schema check.',
            response
          );
      }
      return {
        file,
        status: 'success',
        passed: true,
      };
    } catch (error) {
      if (error instanceof CheckError) {
        setErrors(error.message);
        return Promise.reject(error);
      }
      if (error instanceof Error) {
        setErrors(error.message);
        return Promise.reject(new CheckError(file, error.message));
      }

      throw error;
    }
  };

  const checkFile = async function (file: CustomFile) {
    if (!user) return;
    const data = await checkFileSchema(user, file);
    if (data.MsgType?.toLowerCase() === 'error') setErrors(data.Message);
    setData(data);
  };

  const checkAll = async function (user: User, files: CustomFile[]) {
    setLoading(true);
    const promises = files.map((file) => check(user, file));
    const results = await Promise.allSettled(promises);
    setLoading(false);
    if (results.some((result) => result.status === 'rejected')) {
      return Promise.reject(
        new CheckResultsError('All files must pass basic schema check', results)
      );
    }
    return results;
  };

  return {
    results,
    loading,
    status,
    data,
    errors,
    checkFile,
    checkAll,
  };
}
