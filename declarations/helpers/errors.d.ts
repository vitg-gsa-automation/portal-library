import { CheckFileSchemaResponse, CheckResult } from '../types/validations';
import { CustomFile, UploadResult } from '../types/files';
export declare class UploadError extends Error {
    readonly result: UploadResult;
    constructor(message: string, file: CustomFile);
}
export declare class CheckError extends Error {
    readonly result: CheckResult;
    constructor(file: CustomFile, message: string, response?: CheckFileSchemaResponse);
}
export declare class PromiseSettledResultsError<T = any> extends Error {
    results: PromiseSettledResult<T>[];
    constructor(message: string, results: PromiseSettledResult<T>[]);
}
export declare class CheckResultsError extends PromiseSettledResultsError<CheckResult> {
    readonly name: string;
    constructor(message: string, results: PromiseSettledResult<CheckResult>[]);
}
export declare class UploadResultsError extends PromiseSettledResultsError<UploadResult> {
    readonly name: string;
    constructor(message: string, results: PromiseSettledResult<UploadResult>[]);
}
