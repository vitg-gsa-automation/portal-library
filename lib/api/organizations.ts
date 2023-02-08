import portalService from '../../services/portalService';
import { Organization } from '../types/organizations';

export async function getOrganizations() {
  try {
    const organizations = await portalService.get<Organization[]>(`/GetOrgs`);
    return organizations.data;
  } catch (error) {
    throw error;
  }
}

interface UpdateOrganizationParams {
  _authcode: string;
  _orgname: string;
  _orgtype: number;
  _orgdesc: string;
  _active: number;
  _userid: number;
  _orgid: string;
}

export async function updateOrganization(params: UpdateOrganizationParams) {
  const results = await portalService.post('/PutOrgDetail', undefined, {
    params,
  });
  return results;
}

interface CreateOrganizationParams {
  _authcode: string;
  _orgname: string;
  _orgtype: number;
  _orgdesc: string;
  _active: number;
  _userid: number;
}

export async function createOrganization(params: CreateOrganizationParams) {
  const results = await portalService.post('/PutOrgDetail', undefined, {
    params,
  });
  return results;
}
