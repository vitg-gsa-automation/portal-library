export enum DocStatus {
  Validated = 'validated',
  ValidationErrors = 'validation errors',
  NotValidated = 'not validated',
  PendingReview = 'pending review',
}

export interface Document {
  PkgName?: string;
  PkgID?: number;
  PkgDesc?: string;
  SystemIdentifier?: string;
  SystemName?: string;
  DocObjectId?: number;
  DocShortName?: string;
  DocFullName?: string;
  DocTypeAbbrev?: string;
  DocTypeDesc?: string;
  DocStatus?: string;
  FileLink?: string;
  FileName?: string;
  DocOjectCreatedDate?: string;
  DoObjectCreatedBy?: number;
  DocObjectModifiedDate?: string;
  DocObjectModifiedBy?: number;
  UploadUserID?: number;
  UploadUserName?: string;
  fileType?: string;
  status: string;
  FileSize?: number;
  FileIdentifier?: string;
  DocumentDescription?: string;
  OrgName?: string;
  OrgID?: number;
  RevisionName?: string;

  //
  User?: string;
  UploadDate?: string;
  FileUploadType?: string;
  FileUploadTypeID?: number;
  SystemID?: number;
}
export type DocTypeAbbrev = 'ssp' | 'sap' | 'sar' | 'poam';

export interface UpdateDocParams {
  _authcode: string;
  _doid: number;
  _docshortname: string;
  _docfullname: string;
  _doctypeid: number;
  _systemid: number;
  _pkgid: number;
  _statusid: number;
  _isactive: number;
  _moddate: string;
  _modby: number;
}

export interface DocumentDetails {
  RowID: number;
  DataDefinition: string;
  Title: string;
  'Last Modified': string;
  'Document Version': string;
  'Oscal Version': string;
  'System Owner': string;
  'Authorizing Officer': string;
  ISSO: string;
  ISMPoc: string;
  ISTPoc: string;
  'System ID': string;
  'System Name': string;
  'System Short Name': string;
  'Authorization Type': string;
  Sensitivity: string;
  Status: string;
  Components: number;
  Controls: number;
  Implemented: number;
  Partial: number;
  Planned: number;
  Published: string;
}

export type Revision = 'rev4' | 'rev5';
