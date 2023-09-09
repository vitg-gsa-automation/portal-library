import { CustomFile } from './files';

export type Role = 'fatal' | 'warning' | 'information' | 'error';
export type StageStatus = 'default' | 'error' | 'success';
export interface Assertion {
  message: string;
  status: Role;
  standard: 'file' | 'nist' | 'fedramp';
  location: string;
}
export interface SVRL {
  'svrl:schematron-output': {
    'svrl:failed-assert'?: SVRLFailedAssertion[];
    [propName: string]: any;
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
export type SVRLFailedAssertion = {
  id: string;
  location: string;
  role: Role;
  'svrl:text': string;
  'svrl:diagnostic-reference': {
    content: string;
    diagnostic: string;
  };
  test: string;
  see?: string;
};
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

export type Annotation = {
  uniqueId: string;
  xpath: string;
};

export interface ValidationResult {
  file: CustomFile;
  status: 'success' | 'error';
  assertions: Assertion[];
  message?: string;
}
