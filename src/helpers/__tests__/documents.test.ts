import { MockFile } from '../../__mocks__/mock-file';
import { DocStatus } from '../../types/documents';
import {
  getDocumentStatusIndicatorType,
  stringToDocStatus,
  stringToDocTypeAbbrev,
} from '../documents';

describe('getDocumentStatusIndicatorType', () => {
  it('should return the correct status indicator type', () => {
    expect(getDocumentStatusIndicatorType(DocStatus.PendingReview)).toBe(
      'pending'
    );
    expect(getDocumentStatusIndicatorType(DocStatus.NotValidated)).toBe(
      'error'
    );
    expect(getDocumentStatusIndicatorType(DocStatus.Validated)).toBe('success');
    expect(getDocumentStatusIndicatorType(DocStatus.ValidationErrors)).toBe(
      'error'
    );
  });
});

describe('stringToDocStatus', () => {
  it('should return the correct DocStatus for valid inputs', () => {
    expect(stringToDocStatus('Pending Review')).toBe(DocStatus.PendingReview);
    expect(stringToDocStatus('Not Validated')).toBe(DocStatus.NotValidated);
    expect(stringToDocStatus('Validated')).toBe(DocStatus.Validated);
    expect(stringToDocStatus('Validation Errors')).toBe(
      DocStatus.ValidationErrors
    );
  });

  it('should return undefined for invalid inputs', () => {
    expect(stringToDocStatus('Invalid Status')).toBeUndefined();
  });
});

describe('stringToDocTypeAbbrev', () => {
  it('should return valid doc type abbreviations in lowercase', () => {
    expect(stringToDocTypeAbbrev('SSP')).toBe('ssp');
    expect(stringToDocTypeAbbrev('sap')).toBe('sap');
    expect(stringToDocTypeAbbrev('SAR')).toBe('sar');
    expect(stringToDocTypeAbbrev('POAM')).toBe('poam');
  });

  it('should return undefined for invalid doc type abbreviations', () => {
    expect(stringToDocTypeAbbrev('abc')).toBeUndefined();
    expect(stringToDocTypeAbbrev('ssa')).toBeUndefined();
    expect(stringToDocTypeAbbrev('sa')).toBeUndefined();
    expect(stringToDocTypeAbbrev('pom')).toBeUndefined();
  });

  it('should be case insensitive', () => {
    expect(stringToDocTypeAbbrev('Ssp')).toBe('ssp');
    expect(stringToDocTypeAbbrev('SaP')).toBe('sap');
    expect(stringToDocTypeAbbrev('saR')).toBe('sar');
    expect(stringToDocTypeAbbrev('POaM')).toBe('poam');
  });

  it('should return undefined for empty strings or whitespace strings', () => {
    expect(stringToDocTypeAbbrev('')).toBeUndefined();
    expect(stringToDocTypeAbbrev(' ')).toBeUndefined();
    expect(stringToDocTypeAbbrev('     ')).toBeUndefined();
  });
});
