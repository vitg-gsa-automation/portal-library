import { SVRL } from '../types/validations';
import validationService from '../services/validationService';

interface NistValidateParams {
  filename: string;
  dirname: 'converter';
  fileoption: 'xml' | 'json';
}

interface FedrampValidateParams {
  filename: string;
}

interface ValidationResult {
  validated: boolean;
  message: string;
  http_status: number;
}

interface UploadResult {
  file_uploaded: boolean;
  message: string;
  http_status: number;
}

//Nist validations
export async function uploadToNistValidations(file: File) {
  const fileUploadResults = await validationService.post(
    '/api/validateupload',
    {
      multipartFile: file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return fileUploadResults.data;
}

export async function nistValidate(params: NistValidateParams) {
  try {
    const response = await validationService.post(
      '/api/NISTvalidatefile',
      undefined,
      {
        params,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchNistValidations(fileName: string) {
  if (!fileName)
    throw new Error('Filename must be present to fetch validations');
  const readvalidate = await validationService.post<string>(
    '/api/readvalidate',
    undefined,
    {
      params: {
        // filePath: 'FedRAMP-SSP-OSCAL-Template.xml.ERROR.txt',
        filePath: `${fileName}.ERROR.txt`,
      },
    }
  );
  return readvalidate.data;
}

//FedRAMP validations
export async function uploadToFedrampValidations(file: File) {
  const fileUploadResults = await validationService.post<UploadResult>(
    '/api/fileupload',
    {
      multipartFile: file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  if (!fileUploadResults.data.file_uploaded)
    throw new Error(
      'File failed to upload to the validations container for the purposes of fedramp validations'
    );
  return fileUploadResults.data;
}

export async function fedrampValidate(params: FedrampValidateParams) {
  const response = await validationService.post<ValidationResult>(
    '/api/validatefile',
    undefined,
    {
      params,
    }
  );
  if (!response.data.validated)
    throw new Error(
      'File was not able to be validated against fedramp constraints'
    );
  return response.data;
}

export async function fetchFedrampValidations(fileName: string) {
  const jsonconverter = await validationService.post<SVRL | string>(
    '/api/jsonconverter',
    undefined,
    {
      params: {
        // filePath: 'FedRAMP-SSP-OSCAL-Template.xml__ssp.results.xml',
        //must not hardcode ssp
        filePath: `${fileName}__ssp.results.xml`,
      },
    }
  );
  if (jsonconverter.data) return jsonconverter.data;
}

export async function convertToXML(file: File) {
  const response = await validationService.post<Blob>(
    '/api/NISTConvert',
    {
      multipartFile: file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob',
    }
  );
  const converted = new File([response.data], file.name, {
    type: 'application/octet-stream',
  });

  return converted;
}
