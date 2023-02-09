import { StageStatus, SVRL } from 'types/validations';
import { CustomFile } from 'types/files';
export interface FedRampValidateResult {
    UploadFileName?: string;
    Status?: 'success' | 'error';
    Message?: string;
    Link?: string;
}
declare function useFedrampValidations(fileName?: string): {
    svrl: SVRL | undefined;
    results: FedRampValidateResult[];
    errors: string | undefined;
    loading: boolean;
    status: StageStatus;
    validateFile: (file: CustomFile) => Promise<void>;
    validateAll: (files: CustomFile[]) => Promise<void>;
};
export default useFedrampValidations;
