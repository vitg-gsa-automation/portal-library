import { portalService } from '../services/portalService';

interface CreatePackageParams {
  _id: number;
  _pkgname: string;
  _pkgdesc: string;
  _atobegin: string;
  _atoEnd: string;
  _authtype: number;
  _pkgstatus: number;
}

export async function createPackage(params: CreatePackageParams) {
  try {
    const response = await portalService.post(`/PutPkgDetail`, undefined, {
      params: {
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
