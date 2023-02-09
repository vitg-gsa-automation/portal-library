import { CustomFile } from './files';

export type Role = 'fatal' | 'warning' | 'information' | 'error';
export type StageStatus = 'default' | 'error' | 'success';
export interface SVRL {
  'svrl:schematron-output': {
    'svrl:failed-assert'?: SVRLAssertion[];
  };
}
export interface SVRLAssertion {
  id: string;
  role: Role;
  'svrl:text': string;
  'svrl:diagnostic-reference': {
    content: string;
  };
}
export interface NISTAssertion {
  role: Role;
  text?: string;
  location?: string;
}

export interface FileSchemaAssertion {
  role: Role;
  text?: string;
  location?: string;
}

export interface CheckFileSchemaResponse {
  FileIdentifier?: string;
  ID?: number;
  LogDate?: string;
  Message?: string;
  MsgType?: string;
  UploadFileName?: string;
  Status?: 'success' | 'error';
}

export interface CheckResult {
  file: CustomFile;
  status: 'success' | 'error';
  passed: boolean;
  response?: CheckFileSchemaResponse;
}
