import { extractFileExtension, getOSCALExtension } from '../files';
import { OSCALExtension } from '../../types/files';

describe('extractFileExtension', () => {
  it('should return the file extension', () => {
    const result = extractFileExtension('test.json');
    expect(result).toEqual('json');
  });

  it('should return undefined if there is no file extension', () => {
    const result = extractFileExtension('test');
    expect(result).toBeUndefined();
  });

  it('should handle files starting with a dot', () => {
    const result = extractFileExtension('.gitignore');
    expect(result).toEqual('gitignore');
  });

  it('should handle multiple dots', () => {
    const result = extractFileExtension('test.spec.js');
    expect(result).toEqual('js');
  });
});

describe('getOSCALExtension', () => {
  it('should return the string if it is a valid OSCALExtension', () => {
    const validExtensions: OSCALExtension[] = ['xml', 'json', 'yaml'];

    validExtensions.forEach((ext) => {
      const result = getOSCALExtension(ext);
      expect(result).toEqual(ext);
    });
  });

  it('should return undefined if the string is not a valid OSCALExtension', () => {
    const invalidExtensions: string[] = ['jpg', 'gif', ''];

    invalidExtensions.forEach((ext) => {
      const result = getOSCALExtension(ext);
      expect(result).toBeUndefined();
    });
  });

  it('should return undefined if no string is provided', () => {
    const result = getOSCALExtension();
    expect(result).toBeUndefined();
  });
});
