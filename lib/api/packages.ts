import { User } from 'lib/types/users';
import portalService from '../../services/portalService';

export interface Package {
  ID?: string;
  SystemID?: number;
  ATOBeginDate?: string;
  ATOEndDate?: string;
  PkgName?: string;
  PkgDesc?: string;
  AuthType?: string;
  AuthDesc?: string;
  ContactName?: string;
  ContactEmail?: string;
  LastModified?: string;
  Status?: string;
  PkgCreateDate?: string;
  PkgModifiedDate?: string;
}

export interface CreatePackageParams {
  _id: number;
  _pkgname: string;
  _pkgdesc: string;
  _atobegin: string;
  _atoEnd: string;
  _authtype: number;
  _pkgstatus: number;
}

export async function createPackage(
  user: User,
  createPackageParams: CreatePackageParams
) {
  try {
    const response = await portalService.post(`/PutPkgDetail`, undefined, {
      params: {
        _id: user.UserID,
        _pkgname: createPackageParams._pkgname,
        _pkgdesc: createPackageParams._pkgdesc,
        _atobegin: createPackageParams._atobegin,
        _atoEnd: createPackageParams._atoEnd,
        _authtype: createPackageParams._authtype,
        _pkgstatus: createPackageParams._pkgstatus,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
