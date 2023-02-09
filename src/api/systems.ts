import portalService from '../services/portalService';

interface UpdateSystemParams {
  _authcode: string;
  _sysid: number;
  _orgid: string;
  _sysname: string;
  _systypeid: number;
  _sysidentifier: string;
  _uid: number;
  _isactive: number;
}

interface CreateSystemParams {
  _orgid: string;
  _sysname: string;
  _systypeid: number;
  _sysidentifier: string;
  _uid: number;
  _authcode: string;
}
export async function createSystem(params: CreateSystemParams) {
  const response = await portalService.post('/PutSystemDetail', undefined, {
    params,
  });
  return response.data;
}

export async function updateSystem(params: UpdateSystemParams) {
  const response = await portalService.post('/UpdateSystemDetail', undefined, {
    params,
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

export async function getSystemNamesAggregatorList(
  params: GetSystemNamesAggregatorListParams
) {
  const response = await portalService.get<
    GetSystemNamesAggregatorListResults[]
  >('/GetSystemNamesAggregatorList', {
    params,
  });
  return response.data;
}
