interface CreatePackageParams {
    _id: number;
    _pkgname: string;
    _pkgdesc: string;
    _atobegin: string;
    _atoEnd: string;
    _authtype: number;
    _pkgstatus: number;
}
export declare function createPackage(params: CreatePackageParams): Promise<any>;
export {};
