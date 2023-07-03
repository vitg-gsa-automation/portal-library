import { DocTypeAbbrev } from '../types/documents';
import { OSCALExtension } from '../types/files';

export function extractFileExtension(fileName: string) {
  if (!fileName.includes('.')) return;
  return fileName.slice(fileName.lastIndexOf('.') + 1);
}

export function getOSCALExtension(str: string): OSCALExtension | undefined {
  const validExtensions: OSCALExtension[] = ['xml', 'json', 'yaml'];

  if (validExtensions.includes(str as OSCALExtension)) {
    return str as OSCALExtension;
  }

  return;
}

export async function getDocTypeAbbrev(
  file: File
): Promise<DocTypeAbbrev | undefined> {
  const extension = extractFileExtension(file.name);
  if (!extension) return;
  const oscalExtension = getOSCALExtension(extension);
  if (!oscalExtension) return;
  const text = await file.text();
  let rootElement = '';

  if (oscalExtension === 'xml') {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'application/xml');
    rootElement = xmlDoc.documentElement.nodeName;
  } else if (oscalExtension === 'json') {
    const jsonDoc = JSON.parse(text);
    rootElement = Object.keys(jsonDoc)[0];
  }

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
