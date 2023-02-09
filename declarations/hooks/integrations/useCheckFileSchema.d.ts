import { User } from 'types/users';
import { StageStatus } from 'types/validations';
import { CustomFile } from 'types/files';
export interface CheckFileSchemaResponse {
    FileIdentifier?: string;
    ID?: number;
    LogDate?: string;
    Message?: string;
    MsgType?: string;
    UploadFileName?: string;
    Status?: 'success' | 'error';
}
export interface FileSchemaResult {
    UploadFileName?: string;
    ID?: number;
    Message?: string;
    Status?: 'success' | 'error';
    Link?: string;
}
export interface CheckResult {
    file: CustomFile;
    status: 'success' | 'error';
    passed: boolean;
    response?: CheckFileSchemaResponse;
}
declare function useCheckFileSchema(fileIdentifier?: string): {
    results: FileSchemaResult[];
    loading: boolean;
    status: StageStatus;
    data: CheckFileSchemaResponse | undefined;
    errors: string | undefined;
    checkFile: (file: CustomFile) => Promise<void>;
    checkAll: (user: User, files: CustomFile[]) => Promise<PromiseSettledResult<CheckResult>[]>;
};
export default useCheckFileSchema;
