import { useEffect, useState } from 'react';

import { getErrorMessage, wait } from 'helpers/utils';
import { StageStatus, SVRL } from 'types/validations';
import { CustomFile } from 'types/files';
import { fileNameToParts, isOscal } from 'helpers/documents';
import {
  convertToXML,
  fedrampValidate,
  fetchFedrampValidations,
  uploadToFedrampValidations,
} from 'api/validations';
import { isSVRL } from 'helpers/validations';

export interface FedRampValidateResult {
  UploadFileName?: string;
  Status?: 'success' | 'error';
  Message?: string;
  Link?: string;
}

function getStageStatus(results: FedRampValidateResult[]): StageStatus {
  if (results.length < 1) return 'default';
  const errorExists = results.some((result) => result.Status === 'error');
  const allPass = results.every((result) => result.Status === 'success');
  if (errorExists) return 'error';
  if (allPass) return 'success';
  return 'default';
}

export function useFedrampValidations(fileName?: string) {
  const [results, setResults] = useState<FedRampValidateResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>();
  const [svrl, setSVRL] = useState<SVRL>();
  const status = getStageStatus(results);

  // useEffect(() => {
  //   const start = async function () {
  //     if (!fileName) return;
  //     const data = await fetchFedrampValidations(fileName);
  //     if (isSVRL(data)) setSVRL(data);
  //   };
  //   start();
  // }, [fileName]);

  const validate = async function (
    file: CustomFile
  ): Promise<FedRampValidateResult> {
    try {
      setLoading(true);
      await uploadToFedrampValidations(file);
      const results = await fedrampValidate({
        filename: file.name,
      });
      //TODO: Need to handle below
      // if (results !== 'Complete') throw new Error(`errors exist.`);
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
        Link: `/validate/fedramp/${file.name}`,
      };
    }
  };

  const validateFile = async function (file: CustomFile) {
    let fileToValidate = file;
    const [, extension] = fileNameToParts(fileToValidate.name);
    if (extension === 'json') {
      const xmlFile = await convertToXML(fileToValidate);
      fileToValidate = xmlFile;
    }
    await uploadToFedrampValidations(fileToValidate);
    await fedrampValidate({
      filename: fileToValidate.name,
    });
    const data = await fetchFedrampValidations(fileToValidate.name);
    if (typeof data === 'string') {
      throw new Error(data);
    }
    if (isSVRL(data)) setSVRL(data);
    else throw new Error('data from fedramp validations isnt an SVRL');
  };

  const validateAll = async function (files: CustomFile[]) {
    const oscalFiles = files.filter(isOscal);
    if (!oscalFiles.length) return;
    setLoading(true);
    const promises = oscalFiles.map((file) => validate(file));
    const results = await Promise.all(promises);
    setResults(results);
    setLoading(false);
  };
  return { svrl, results, errors, loading, status, validateFile, validateAll };
}
