import {
  extractFileExtension,
  formatBytes,
  getDocTypeAbbrev,
  getOSCALExtension,
} from '../files';
import { OSCALExtension } from '../../types/files';

// Mock for File
class MockFile {
  constructor(public name: string, public content: string) {}

  text(): Promise<string> {
    return Promise.resolve(this.content);
  }
}

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
});

describe('getDocTypeAbbrev function with XML files', () => {
  test("should return 'ssp' for system-security-plan", async () => {
    const mockFile = new MockFile(
      'test.xml',
      '<system-security-plan></system-security-plan>'
    );
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual('ssp');
  });

  test("should return 'sap' for assessment-plan", async () => {
    const mockFile = new MockFile(
      'test.xml',
      '<assessment-plan></assessment-plan>'
    );
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual('sap');
  });

  test("should return 'sar' for assessment-results", async () => {
    const mockFile = new MockFile(
      'test.xml',
      '<assessment-results></assessment-results>'
    );
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual('sar');
  });

  test("should return 'poam' for plan-of-action-and-milestones", async () => {
    const mockFile = new MockFile(
      'test.xml',
      '<plan-of-action-and-milestones></plan-of-action-and-milestones>'
    );
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual('poam');
  });

  test('should return undefined for unknown xml tag', async () => {
    const mockFile = new MockFile('test.xml', '<unknown></unknown>');
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual(undefined);
  });
});

describe('getDocTypeAbbrev function with JSON files', () => {
  test("should return 'ssp' for system-security-plan", async () => {
    const mockFile = new MockFile(
      'test.json',
      JSON.stringify({ 'system-security-plan': {} })
    );
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual('ssp');
  });

  test("should return 'sap' for assessment-plan", async () => {
    const mockFile = new MockFile(
      'test.json',
      JSON.stringify({ 'assessment-plan': {} })
    );
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual('sap');
  });

  test("should return 'sar' for assessment-results", async () => {
    const mockFile = new MockFile(
      'test.json',
      JSON.stringify({ 'assessment-results': {} })
    );
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual('sar');
  });

  test("should return 'poam' for plan-of-action-and-milestones", async () => {
    const mockFile = new MockFile(
      'test.json',
      JSON.stringify({ 'plan-of-action-and-milestones': {} })
    );
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual('poam');
  });

  test('should return undefined for unknown json key', async () => {
    const mockFile = new MockFile('test.json', JSON.stringify({ unknown: {} }));
    const result = await getDocTypeAbbrev(mockFile as any);
    expect(result).toEqual(undefined);
  });
});

describe('formatBytes', () => {
  it('should correctly format bytes with default decimal setting', () => {
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1048576)).toBe('1 MB');
  });

  it('should return correct format with custom decimals', () => {
    expect(formatBytes(1024, 0)).toBe('1 KB');
    expect(formatBytes(543454, 3)).toBe('530.717 KB');
  });

  it('should return "0 Bytes" for non-positive numbers or when input is invalid', () => {
    expect(formatBytes(0)).toBe('0 Bytes');
    expect(formatBytes(-5)).toBe('0 Bytes');
    expect(formatBytes(NaN)).toBe('0 Bytes');
  });

  it('should not allow negative decimal values', () => {
    expect(formatBytes(1024, -2)).toBe('1 KB'); // Uses default 2 decimals since negative is not allowed
  });
});
