import { Item } from './form';
import { CheckResult } from '../types/validations';

export interface AcceptableFileType {
  ID: number;
  NAME: string;
  Extension: string;
}

export interface CustomFile extends File {
  description?: string;
  ftDescription?: string;
  FileTypeId?: number;
  docType?: Item;
  FileIdentifier?: string;
}
export interface UploadFileParams {
  AuthCode: string;
  PackageId: number | string;
  SystemId: number;
  DocDesc: string;
  FileTypeId: number;
  DocObjTypeId: number;
}

export interface UploadResult {
  file: CustomFile;
  uploaded: boolean;
  status?: 'success' | 'error';
  message?: string;
  checkResult?: CheckResult;
}

export type OSCALExtension = 'xml' | 'json' | 'yaml';
