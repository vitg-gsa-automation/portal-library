import { Document } from 'types/documents';
declare function useValidations(doc?: Document): {
    checkFileSchema: {
        results: import("hooks/integrations/useCheckFileSchema").FileSchemaResult[];
        loading: boolean;
        status: import("../..").StageStatus;
        data: import("hooks/integrations/useCheckFileSchema").CheckFileSchemaResponse | undefined;
        errors: string | undefined;
        checkFile: (file: import("../..").CustomFile) => Promise<void>;
        checkAll: (user: import("../..").User, files: import("../..").CustomFile[]) => Promise<PromiseSettledResult<import("hooks/integrations/useCheckFileSchema").CheckResult>[]>;
    };
    nistValidations: {
        results: import("./useNistValidations").NistValidateResult[];
        errors: string | undefined;
        status: import("../..").StageStatus;
        loading: boolean;
        validateFile: (file: import("../..").CustomFile) => Promise<void>;
        validateAll: (files: import("../..").CustomFile[]) => Promise<"success" | "default" | undefined>;
    };
    fedrampValidations: {
        svrl: import("../..").SVRL | undefined;
        results: import("./useFedrampValidations").FedRampValidateResult[];
        errors: string | undefined;
        loading: boolean;
        status: import("../..").StageStatus;
        validateFile: (file: import("../..").CustomFile) => Promise<void>;
        validateAll: (files: import("../..").CustomFile[]) => Promise<void>;
    };
    validate: () => Promise<void>;
};
export default useValidations;
