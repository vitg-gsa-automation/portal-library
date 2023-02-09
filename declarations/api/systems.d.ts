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
export declare function createSystem(params: CreateSystemParams): Promise<any>;
export declare function updateSystem(params: UpdateSystemParams): Promise<any>;
interface GetSystemNamesAggregatorListParams {
    _systemname: string;
    _orgident: string;
}
interface GetSystemNamesAggregatorListResults {
    SystemName: string;
}
export declare function getSystemNamesAggregatorList(params: GetSystemNamesAggregatorListParams): Promise<GetSystemNamesAggregatorListResults[]>;
export {};
