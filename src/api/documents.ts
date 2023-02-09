import { User } from '../types/users';
import { fileLinkToFileName, getDocTypeAbbrev } from '../helpers/documents';
import documentService from '../services/documentService';
import fileService from '../services/fileService';
import validationService from '../services/validationService';
import { SVRL } from '../types/validations';
import { Document, UpdateDocParams } from '../types/documents';
import { UploadFileParams } from '../types/files';

export async function fetchDocument(user: User, docId: number) {
  const response = await documentService.get<[Document]>('/GetDocsByDocId', {
    params: {
      _authcode: user.AuthenticationCode,
      _docid: docId,
    },
  });
  return response.data;
}

export async function uploadFile(file: File, params: UploadFileParams) {
  const formData = new FormData();
  formData.append('document', file);
  const response = await fileService.post(
    '/api/FileServices',
    {
      RawData: file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params,
    }
  );
  return response.data;
}

interface DownloadFileParams {
  AuthCode: string;
  FileIdentifier: string;
}
export async function downloadFile({
  AuthCode,
  FileIdentifier,
}: DownloadFileParams) {
  const response = await fileService.get<Blob>('/api/FileServices', {
    params: {
      AuthCode,
      FileIdentifier,
    },
    responseType: 'blob',
  });
  return response.data;
}

export async function uploadToFedrampValidations(file: File) {
  const fileUploadResults = await validationService.post(
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
  return fileUploadResults.data;
}

export async function uploadToNistValidations(file: File) {
  const fileUploadResults = await validationService.post(
    '/api/converterupload',
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

interface FedrampValidateOptions {
  filename: string;
  dirname: 'upload';
  rulesoption: 'rules_ssp' | 'rules_sap' | 'rules_sar' | 'rules_poam';
}

export async function fedrampValidate(options: FedrampValidateOptions) {
  const response = await validationService.post(
    '/api/validatefile',
    undefined,
    {
      params: {
        filename: options.filename,
        dirname: options.dirname,
        rulesoption: options.rulesoption,
      },
    }
  );
  return response.data;
}

interface NistValidateOptions {
  filename: string;
  dirname: 'converter';
  fileoption: 'xml' | 'json';
}

export async function NistValidate(options: NistValidateOptions) {
  const response = await validationService.post(
    '/api/NISTvalidatefile',
    undefined,
    {
      params: {
        filename: options.filename,
        dirname: options.dirname,
        fileoption: options.fileoption,
      },
    }
  );
  return response.data;
}

export async function fetchFedrampValidations(doc: Document) {
  const { FileLink, DocTypeAbbrev } = doc;
  if (!FileLink || !DocTypeAbbrev) return;
  const fileName = fileLinkToFileName(FileLink);
  const docTypeAbbrev = getDocTypeAbbrev(DocTypeAbbrev);
  if (!fileName)
    throw new Error('A filename must be present to run FedRAMP validations');
  if (!docTypeAbbrev)
    throw new Error('A doc type must be present to run FedRAMP validations');
  const jsonconverter = await validationService.post<SVRL>(
    '/api/jsonconverter',
    undefined,
    {
      params: {
        // filePath: 'FedRAMP-SSP-OSCAL-Template.xml__ssp.results.xml',
        filePath: `${fileName}__${docTypeAbbrev}.results.xml`,
      },
    }
  );
  return jsonconverter.data;
}

export async function fetchNistValidations(doc: Document) {
  const { FileLink } = doc;
  if (!FileLink) return;
  const fileName = fileLinkToFileName(FileLink);
  if (!fileName)
    throw new Error('A filename must be present to run NIST validations');
  const readconverter = await validationService.post(
    '/api/readconverter',
    undefined,
    {
      params: {
        // filePath: 'FedRAMP-SSP-OSCAL-Template.xml__ssp.results.xml',
        filePath: `${fileName}.ERROR.txt`,
      },
    }
  );
  return readconverter.data;
}

export async function updateDocument(params: UpdateDocParams) {
  const response = await documentService.post(
    '/UpdateDocumentDetail',
    undefined,
    {
      params,
    }
  );
  return response.data;
}
