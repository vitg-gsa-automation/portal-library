import { AcceptableFileType } from '../types/files';
import { DocTypeAbbrev, Document } from '../types/documents';
import { CustomFile } from '../types/files';
import { NISTAssertion, SVRL, SVRLAssertion, FileSchemaAssertion } from '../types/validations';
export declare function isOscal(file: CustomFile): boolean;
export declare function getDocTypeAbbrev(str: string): DocTypeAbbrev | undefined;
export declare function fileNameToParts(fileName: string): string[];
export declare function fileLinkToFileName(fileLink: string): string;
interface DownloadParams {
    AuthCode: string;
    doc: Document;
}
export declare function download({ AuthCode, doc }: DownloadParams): Promise<void>;
export declare function buildFedrampAssertions(svrl: SVRL): SVRLAssertion[][];
export declare function buildNistAssertions(results: string): NISTAssertion[];
export declare function buildFileSchemaAssertions(results: string): FileSchemaAssertion[];
export declare function findAcceptableFT(file: File, acceptableFileTypes?: AcceptableFileType[]): AcceptableFileType | undefined;
export declare function getDocTypeString(docTypeAbbrev: DocTypeAbbrev): "System Security Plan" | "Security Assessment Plan" | "Security Assessment Report" | "Plan of Actions and Milestones";
export {};
