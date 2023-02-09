import { StageStatus } from 'types/validations';
import { CustomFile } from 'types/files';
export interface NistValidateResult {
    UploadFileName?: string;
    Status?: 'success' | 'error';
    Message?: string;
    Link?: string;
}
declare function useNistValidations(fileName?: string): {
    results: NistValidateResult[];
    errors: string | undefined;
    status: StageStatus;
    loading: boolean;
    validateFile: (file: CustomFile) => Promise<void>;
    validateAll: (files: CustomFile[]) => Promise<"success" | "default" | undefined>;
};
export default useNistValidations;
