export interface User {
  UserID?: number;
  UserName?: string;
  RoleID?: number;
  RoleName?: string;
  RegistrationID?: number;
  APIKEY?: string;
  AuthenticationCode?: string;
  LastLogin?: string;
  OrganizationID?: string;
  OrganizationName?: string;
  PhoneNumber?: string;
}

export interface Credentials {
  email: string;
  password: string;
}
