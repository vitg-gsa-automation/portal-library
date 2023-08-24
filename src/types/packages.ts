export interface Package {
  ID?: string;
  SystemID?: number;
  SystemName?: string;
  ATOBeginDate?: string;
  ATOEndDate?: string;
  PkgName?: string;
  PkgDesc?: string;
  AuthType?: string;
  AuthTypeID?: number;
  AuthDesc?: string;
  ContactName?: string;
  ContactEmail?: string;
  LastModified?: string;
  Status?: string;
  StatusID?: number;
  PkgCreateDate?: string;
  PkgModifiedDate?: string;
  OrgID?: string;
  OrgName?: string;
  RevisionName?: string;
}

export enum PackageStatus {
  Pending = 'pending',
  InProgress = 'in progress',
  Closed = 'closed',
  Cancelled = 'cancelled',
  FedRampReady = 'fedramp ready',
}
