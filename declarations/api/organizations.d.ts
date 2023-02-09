import { Organization } from '../types/organizations';
export declare function getOrganizations(): Promise<Organization[]>;
interface UpdateOrganizationParams {
    _authcode: string;
    _orgname: string;
    _orgtype: number;
    _orgdesc: string;
    _active: number;
    _userid: number;
    _orgid: string;
}
export declare function updateOrganization(params: UpdateOrganizationParams): Promise<import("axios").AxiosResponse<any, any>>;
interface CreateOrganizationParams {
    _authcode: string;
    _orgname: string;
    _orgtype: number;
    _orgdesc: string;
    _active: number;
    _userid: number;
}
export declare function createOrganization(params: CreateOrganizationParams): Promise<import("axios").AxiosResponse<any, any>>;
export {};
