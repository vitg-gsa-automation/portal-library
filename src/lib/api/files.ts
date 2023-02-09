import { UploadFileParams } from '../types/files';
import { User } from '../types/users';
import fileService from '../../services/fileService';

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

export async function downloadFile(user: User, fileIdentifier: string) {
  const response = await fileService.get<Blob>('/api/FileServices', {
    params: {
      AuthCode: user.AuthenticationCode,
      FileIdentifier: fileIdentifier,
    },
    responseType: 'blob',
  });
  return response.data;
}
