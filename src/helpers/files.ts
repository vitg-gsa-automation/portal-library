import { OSCALExtension } from '../types/files';

export function extractFileExtension(fileName = '') {
  if (!fileName.includes('.')) return;
  return fileName.slice(fileName.lastIndexOf('.') + 1);
}

export function getOSCALExtension(str?: string): OSCALExtension | undefined {
  const validExtensions: OSCALExtension[] = ['xml', 'json', 'yaml'];

  if (validExtensions.includes(str as OSCALExtension)) {
    return str as OSCALExtension;
  }

  return;
}
