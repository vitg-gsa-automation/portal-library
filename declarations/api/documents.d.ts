import { User } from '../types/users';
import { Document, UpdateDocParams } from '../types/documents';
import { UploadFileParams } from '../types/files';
export declare function fetchDocument(user: User, docId: number): Promise<[Document]>;
export declare function uploadFile(file: File, params: UploadFileParams): Promise<any>;
interface DownloadFileParams {
    AuthCode: string;
    FileIdentifier: string;
}
export declare function downloadFile({ AuthCode, FileIdentifier, }: DownloadFileParams): Promise<Blob>;
export declare function updateDocument(params: UpdateDocParams): Promise<any>;
export {};
