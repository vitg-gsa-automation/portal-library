import { CustomFile, UploadResult } from 'types/files';
import { CheckResultsError, PromiseSettledResultsError, UploadResultsError } from 'helpers/errors';
interface MultipleUploadFileParams {
    AuthCode: string;
    PackageId: number | string;
    SystemId: number;
}
declare function useStagedUpload(): {
    checkFileSchema: {
        results: import("hooks/integrations/useCheckFileSchema").FileSchemaResult[];
        loading: boolean;
        status: import("..").StageStatus;
        data: import("hooks/integrations/useCheckFileSchema").CheckFileSchemaResponse | undefined;
        errors: string | undefined;
        checkFile: (file: CustomFile) => Promise<void>;
        checkAll: (user: import("..").User, files: CustomFile[]) => Promise<PromiseSettledResult<import("hooks/integrations/useCheckFileSchema").CheckResult>[]>;
    };
    fileUpload: {
        loading: boolean;
        results: PromiseSettledResult<UploadResult>[];
        errors: unknown;
        upload: (file: CustomFile, params: import("types/files").UploadFileParams) => Promise<UploadResult>;
        uploadAll: (files: CustomFile[], params: import("hooks/files/useUpload").MultipleUploadFileParams) => Promise<PromiseSettledResult<UploadResult>[]>;
    };
    error: PromiseSettledResultsError<any> | undefined;
    results: UploadResult[];
    status: "success" | "error" | undefined;
    upload: (files: CustomFile[], params: MultipleUploadFileParams) => Promise<void>;
    uploading: boolean;
};
export declare function checkResultsErrorToUploadResults(error: CheckResultsError): UploadResult[];
export declare function uploadResultsErrorToUploadResults(error: UploadResultsError): UploadResult[];
export declare function generateUploadResults(results: PromiseSettledResult<UploadResult>[]): UploadResult[];
export default useStagedUpload;
