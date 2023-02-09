import { User } from '../types/users';
import { documentService } from '../services/documentService';
import { fileService } from '../services/fileService';
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
