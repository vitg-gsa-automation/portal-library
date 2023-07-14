import { DocStatus } from '../../types/documents';
import {
  getDocumentStatusIndicatorType,
  stringToDocStatus,
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
