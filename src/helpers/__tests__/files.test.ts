import {
  extractFileExtension,
  formatBytes,
  getDocTypeAbbrev,
  isOscal,
  getOSCALExtension,
  getRootElement,
  getRootElementFromYAML,
} from '../files';
import { OSCALExtension } from '../../types/files';
import { MockFile } from '../../__mocks__/mock-file';

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
    const fileContent = '<system-security-plan></system-security-plan>';
    const mockFile = new MockFile(fileContent, 'test.xml', {
      type: 'text/xml',
    });
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('ssp');
  });

  test("should return 'sap' for assessment-plan", async () => {
    const mockFile = new MockFile(
      '<assessment-plan></assessment-plan>',
      'test.xml',
      { type: 'text/xml' }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('sap');
  });

  test("should return 'sar' for assessment-results", async () => {
    const mockFile = new MockFile(
      '<assessment-results></assessment-results>',
      'test.xml',
      { type: 'text/xml' }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('sar');
  });

  test("should return 'poam' for plan-of-action-and-milestones", async () => {
    const mockFile = new MockFile(
      '<plan-of-action-and-milestones></plan-of-action-and-milestones>',
      'test.xml',
      { type: 'text/xml' }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('poam');
  });

  test('should return undefined for unknown xml tag', async () => {
    const mockFile = new MockFile('<unknown></unknown>', 'test.xml', {
      type: 'text/xml',
    });
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual(undefined);
  });
});

describe('getDocTypeAbbrev function with JSON files', () => {
  test("should return 'ssp' for system-security-plan", async () => {
    const mockFile = new MockFile(
      JSON.stringify({ 'system-security-plan': {} }),
      'test.json',
      {
        type: 'application/json',
      }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('ssp');
  });

  test("should return 'sap' for assessment-plan", async () => {
    const mockFile = new MockFile(
      JSON.stringify({ 'assessment-plan': {} }),
      'test.json',
      {
        type: 'application/json',
      }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('sap');
  });

  test("should return 'sar' for assessment-results", async () => {
    const mockFile = new MockFile(
      JSON.stringify({ 'assessment-results': {} }),
      'test.json',
      {
        type: 'application/json',
      }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('sar');
  });

  test("should return 'poam' for plan-of-action-and-milestones", async () => {
    const mockFile = new MockFile(
      JSON.stringify({ 'plan-of-action-and-milestones': {} }),
      'test.json',
      {
        type: 'application/json',
      }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('poam');
  });

  test('should return undefined for unknown json key', async () => {
    const mockFile = new MockFile(
      JSON.stringify({ unknown: {} }),
      'test.json',
      {
        type: 'application/json',
      }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual(undefined);
  });
});

describe('getDocTypeAbbrev function with YAML files', () => {
  test("should return 'ssp' for system-security-plan", async () => {
    const mockFile = new MockFile(
      'system-security-plan:\n  key: value',
      'test.yaml',
      {
        type: 'text/yaml',
      }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('ssp');
  });

  test("should return 'sap' for assessment-plan", async () => {
    const mockFile = new MockFile(
      'assessment-plan:\n  key: value',
      'test.yaml',
      {
        type: 'text/yaml',
      }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('sap');
  });

  test("should return 'sar' for assessment-results", async () => {
    const mockFile = new MockFile(
      'assessment-results:\n  key: value',
      'test.yaml',
      {
        type: 'text/yaml',
      }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('sar');
  });

  test("should return 'poam' for plan-of-action-and-milestones", async () => {
    const mockFile = new MockFile(
      'plan-of-action-and-milestones:\n  key: value',
      'test.yaml',
      {
        type: 'text/yaml',
      }
    );
    const result = await getDocTypeAbbrev(mockFile);
    expect(result).toEqual('poam');
  });

  test('should return undefined for unknown yaml key', async () => {
    const mockFile = new MockFile('unknown:\n  key: value', 'test.yaml', {
      type: 'text/yaml',
    });
    const result = await getDocTypeAbbrev(mockFile);
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

describe('getRootElementFromYAML', () => {
  it('should return the root element from a given YAML string', () => {
    const input = `---
system-security-plan:
uuid: 9809eddf-2cd5-468f-97c5-9769905d0629`;
    const output = getRootElementFromYAML(input);
    expect(output).toBe('system-security-plan');
  });

  it('should skip comments and return the root element', () => {
    const input = `# This is a comment
---
another-root:
key: value
      `;
    console.log(input);

    const output = getRootElementFromYAML(input);
    expect(output).toBe('another-root');
  });

  it('should return an empty string if no root element is found', () => {
    const input = `# Comment only
---`;
    const output = getRootElementFromYAML(input);
    expect(output).toBe('');
  });

  it('should return the first root element if multiple are present', () => {
    const input = `with-spaces: true
another-key: false`;
    const output = getRootElementFromYAML(input);
    expect(output).toBe('with-spaces');
  });
});

describe('getRootElement', () => {
  it('should retrieve the root element from an XML file', async () => {
    const file = new MockFile(
      '<system-security-plan>Hello World</system-security-plan>',
      'sample.xml',
      { type: 'text/xml' }
    );
    const root = await getRootElement(file);
    expect(root).toBe('system-security-plan');
  });

  it('should retrieve the root element from a JSON file', async () => {
    const fileContent = JSON.stringify({
      'system-security-plan': 'Hello World',
    });
    const file = new MockFile(fileContent, 'sample.json', {
      type: 'application/json',
    });
    const root = await getRootElement(file);
    expect(root).toBe('system-security-plan');
  });

  it('should retrieve the root element from a YAML file', async () => {
    // Assuming your getRootElementFromYAML function works with this structure
    const fileContent = 'system-security-plan:\n  Hello: World';
    const file = new MockFile(fileContent, 'sample.yaml', {
      type: 'text/yaml',
    });
    const root = await getRootElement(file);
    expect(root).toBe('system-security-plan');
  });

  it('should throw an error for unsupported file types', async () => {
    const file = new MockFile('unsupported content', 'sample.txt', {
      type: 'text/plain',
    });
    await expect(getRootElement(file)).rejects.toThrow(
      'Unsupported file format'
    );
  });
});

describe('isOscal', () => {
  it('returns true for a valid ssp in XML', async () => {
    const file = new MockFile(
      '<system-security-plan>Hello World</system-security-plan>',
      'sample.xml',
      { type: 'text/xml' }
    );
    const result = await isOscal(file);
    expect(result).toBe(true);
  });
  it('returns true for a valid ssp in JSON', async () => {
    const fileContent = JSON.stringify({
      'system-security-plan': 'Hello World',
    });
    const file = new MockFile(fileContent, 'sample.json', {
      type: 'application/json',
    });
    const result = await isOscal(file);
    expect(result).toBe(true);
  });
  it('returns true for a valid ssp in YAML', async () => {
    const fileContent = 'system-security-plan:\n  Hello: World';
    const file = new MockFile(fileContent, 'sample.yaml', {
      type: 'text/yaml',
    });
    const result = await isOscal(file);
    expect(result).toBe(true);
  });

  it('returns false for an invalid oscal root element', async () => {
    const file = new MockFile('<yikes>Hello World</yikes>', 'sample.xml', {
      type: 'text/xml',
    });
    const result = await isOscal(file);
    expect(result).toBe(false);
  });
  it('returns false for a non-oscal document', async () => {
    const file = new MockFile(
      'This is a sample plaintext content.',
      'sample.txt',
      {
        type: 'text/plain',
      }
    );
    const result = await isOscal(file);
    expect(result).toBe(false);
  });
});
