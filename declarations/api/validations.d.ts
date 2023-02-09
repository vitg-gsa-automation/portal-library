import { SVRL } from '../types/validations';
interface NistValidateParams {
    filename: string;
    dirname: 'converter';
    fileoption: 'xml' | 'json';
}
interface FedrampValidateParams {
    filename: string;
}
interface ValidationResult {
    validated: boolean;
    message: string;
    http_status: number;
}
interface UploadResult {
    file_uploaded: boolean;
    message: string;
    http_status: number;
}
export declare function uploadToNistValidations(file: File): Promise<any>;
export declare function nistValidate(params: NistValidateParams): Promise<any>;
export declare function fetchNistValidations(fileName: string): Promise<string>;
export declare function uploadToFedrampValidations(file: File): Promise<UploadResult>;
export declare function fedrampValidate(params: FedrampValidateParams): Promise<ValidationResult>;
export declare function fetchFedrampValidations(fileName: string): Promise<string | SVRL | undefined>;
export declare function convertToXML(file: File): Promise<File>;
export {};
