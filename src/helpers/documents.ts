import { parseFileExt } from '.';
import { AcceptableFileType } from '../types/files';

import { downloadFile } from '../api/documents';

import { DocTypeAbbrev, Document } from '../types/documents';

import { CustomFile } from '../types/files';
import {
  NISTAssertion,
  SVRL,
  SVRLAssertion,
  FileSchemaAssertion,
  Role,
} from '../types/validations';

export function isOscal(file: CustomFile) {
  if (!file.ftDescription) return false;
  const oscal = ['OSCAL XML', 'OSCAL JSON'];
  return oscal.includes(file.ftDescription.toUpperCase());
}

export function getDocTypeAbbrev(str: string) {
  const lower = str.toLowerCase();
  const isDocType =
    lower === 'ssp' || lower === 'sap' || lower === 'sar' || lower === 'poam';
  if (isDocType) return lower as DocTypeAbbrev;
}

export function fileNameToParts(fileName: string) {
  const result = fileName.split('.');
  return result;
}

export function fileLinkToFileName(fileLink: string) {
  const parts = fileLink.split('/');
  return parts[parts.length - 1];
}

interface DownloadParams {
  AuthCode: string;
  doc: Document;
}
export async function download({ AuthCode, doc }: DownloadParams) {
  const { FileLink, FileIdentifier } = doc;
  if (!FileLink) throw new Error('No FileLink');
  if (!FileIdentifier) throw new Error('No FileIdentifier');
  const blob = await downloadFile({ AuthCode, FileIdentifier });
  // create file link in browser's memory
  const href = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.setAttribute('download', fileLinkToFileName(FileLink)); //or any other extension
  document.body.appendChild(link);
  link.click();
  // clean up "a" element & remove ObjectURL
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
}

export function buildFedrampAssertions(svrl: SVRL) {
  if (!svrl?.['svrl:schematron-output']?.['svrl:failed-assert']) return [];
  const svrlAssertions = svrl['svrl:schematron-output']['svrl:failed-assert'];
  const result = svrlAssertions.reduce(function (r: any, a: SVRLAssertion) {
    r[a.id] = r[a.id] || [];
    r[a.id].push(a);
    return r;
  }, Object.create(null));
  return Object.values<SVRLAssertion[]>(result);
}

export function buildNistAssertions(results: string): NISTAssertion[] {
  if (!results) return [];
  const split = results.split(
    '\u001b[97m[\u001b[0;91mERROR\u001b[0;97m] \u001b[m'
  );
  const errors = split.slice(1).map((error) => {
    const errorArray = error.split('] ');
    const role: Role = 'error';
    return { location: errorArray[0].slice(1), text: errorArray[1], role };
  });
  return errors;
}

export function buildFileSchemaAssertions(
  results: string
): FileSchemaAssertion[] {
  if (!results) return [];
  return [
    {
      role: 'error',
      text: results,
      location: '',
    },
  ];
}

export function findAcceptableFT(
  file: File,
  acceptableFileTypes?: AcceptableFileType[]
) {
  if (!acceptableFileTypes) return;
  const fileName = file.name;
  const extenstion = parseFileExt(fileName);
  const acceptableFileType = acceptableFileTypes.find(
    (acceptableFileType) => acceptableFileType.Extension.slice(1) === extenstion
  );
  return acceptableFileType;
}

export function getDocTypeString(docTypeAbbrev: DocTypeAbbrev) {
  switch (docTypeAbbrev) {
    case 'ssp':
      return 'System Security Plan';
    case 'sap':
      return 'Security Assessment Plan';
    case 'sar':
      return 'Security Assessment Report';
    case 'poam':
      return 'Plan of Actions and Milestones';
  }
}
