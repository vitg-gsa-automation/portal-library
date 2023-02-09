import { CustomFile, UploadFileParams, UploadResult } from 'types/files';
export interface MultipleUploadFileParams {
    AuthCode: string;
    PackageId: number | string;
    SystemId: number;
}
declare function useUpload(): {
    loading: boolean;
    results: PromiseSettledResult<UploadResult>[];
    errors: unknown;
    upload: (file: CustomFile, params: UploadFileParams) => Promise<UploadResult>;
    uploadAll: (files: CustomFile[], params: MultipleUploadFileParams) => Promise<PromiseSettledResult<UploadResult>[]>;
};
export default useUpload;
