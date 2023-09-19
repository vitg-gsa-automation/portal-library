import { DocTypeAbbrev } from '../types/documents';
import { OSCALExtension } from '../types/files';

export function extractFileExtension(fileName: string) {
  if (!fileName.includes('.')) return;
  return fileName.slice(fileName.lastIndexOf('.') + 1);
}

export function getOSCALExtension(str: string): OSCALExtension | undefined {
  const validExtensions = new Set<OSCALExtension>([
    'xml',
    'json',
    'yaml',
    'yml',
  ]);

  if (validExtensions.has(str as OSCALExtension)) {
    return str as OSCALExtension;
  }

  return;
}

export async function getDocTypeAbbrev(
  file: File
): Promise<DocTypeAbbrev | undefined> {
  const rootElement = await getRootElement(file);
  switch (rootElement) {
    case 'system-security-plan':
      return 'ssp';
    case 'assessment-plan':
      return 'sap';
    case 'assessment-results':
      return 'sar';
    case 'plan-of-action-and-milestones':
      return 'poam';
    default:
      return undefined;
  }
}

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes <= 0 || isNaN(bytes)) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function getRootElementFromYAML(text: string): string {
  const lines = text.split('\n');
  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('---') || trimmed.startsWith('#')) {
      continue;
    }
    if (line[0] !== ' ' && line[0] !== '\t') {
      // No leading whitespace
      return trimmed.split(':')[0];
    } else break;
  }
  return '';
}

/**
 * Retrieves the root element of the provided file. The file must be one of the following formats: XML, JSON, or YAML.
 *
 * @param {File} file - The file object from which the root element should be extracted. The file's format must be either XML, JSON, or YAML.
 * @returns {Promise<string>} A promise that resolves with the name of the root element.
 *
 * @example
 *
 * const file = new File(["<system-security-plan>Hello World</system-security-plan>"], "sample.xml", { type: "text/xml" });
 * const root = await getRootElement(file);
 * console.log(root); // "system-security-plan"
 */
export async function getRootElement(file: File): Promise<string> {
  const extension = extractFileExtension(file.name);
  const text = await file.text();
  let rootElement = '';

  if (extension === 'xml') {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'application/xml');
    rootElement = xmlDoc.documentElement.nodeName;
  } else if (extension === 'json') {
    const jsonDoc = JSON.parse(text);
    rootElement = Object.keys(jsonDoc)[0];
  } else if (extension === 'yml' || extension === 'yaml') {
    rootElement = getRootElementFromYAML(text);
  } else {
    throw new Error('Unsupported file format');
  }
  return rootElement;
}

/**
 * Checks if the provided file has a root element matching any of the valid OSCAL document types.
 *
 * @param {File} file - The file to be checked.
 * @returns {Promise<boolean>} - Returns true if the file is an OSCAL document, otherwise false.
 */
export async function isOscal(file: File): Promise<boolean> {
  const extension = extractFileExtension(file.name);
  const oscalExtension = extension ? getOSCALExtension(extension) : undefined;
  if (!oscalExtension) return false;
  const rootElement = await getRootElement(file);
  const validRootElements = new Set([
    'system-security-plan',
    'assessment-plan',
    'assessment-results',
    'plan-of-action-and-milestones',
  ]);

  return validRootElements.has(rootElement);
}
