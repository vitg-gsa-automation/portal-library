import { CreateSystemParams } from 'lib/types/systems';
import { User } from 'lib/types/users';
import portalService from 'services/portalService';

export interface System {
  SystemId?: number;
  OrgID?: string;
  OrgName?: string;
  SystemName?: string;
  SystemShortName?: string;
  SystemIdentifier?: string;
  CreatedBy?: string;
  CreatedByID?: number;
  CreatedDate?: string;
  ModifiedBy?: number;
  ModifiedDate?: string;
  SystemTypeID?: number;
  //exception
  isActive?: 1 | 0;
  Status?: 1 | 0;
}

export interface UpdateSystemParams {
  _authcode: string;
  _sysid: number;
  _orgid: string;
  _sysname: string;
  _systypeid: number;
  _sysidentifier: string;
  _uid: number;
  _isactive: number;
}

export async function createSystem({
  _authcode,
  _orgid,
  _sysname,
  _systypeid,
  _sysidentifier,
  _uid,
}: CreateSystemParams) {
  const response = await portalService.post('/PutSystemDetail', undefined, {
    params: {
      _authcode,
      _orgid,
      _sysname,
      _systypeid,
      _sysidentifier,
      _uid,
    },
  });
  return response.data;
}

export async function updateSystem({
  _sysid,
  _orgid,
  _sysname,
  _systypeid,
  _sysidentifier,
  _isactive,
  _uid,
  _authcode,
}: UpdateSystemParams) {
  const response = await portalService.post('/UpdateSystemDetail', undefined, {
    params: {
      _authcode,
      _sysid,
      _orgid,
      _sysname,
      _systypeid,
      _sysidentifier,
      _uid,
      _isactive,
    },
  });
  return response.data;
}

interface GetSystemNamesAggregatorListParams {
  _systemname: string;
  _orgident: string;
}
interface GetSystemNamesAggregatorListResults {
  SystemName: string;
}

export async function getSystemNamesAggregatorList({
  _systemname,
  _orgident,
}: GetSystemNamesAggregatorListParams) {
  const response = await portalService.get<
    GetSystemNamesAggregatorListResults[]
  >('/GetSystemNamesAggregatorList', {
    params: {
      _systemname,
      _orgident,
    },
  });
  return response.data;
}
