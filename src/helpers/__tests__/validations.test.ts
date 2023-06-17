import {
  isSVRL,
  hasFailedAssert,
  getSVRLFailedAssertions,
} from '../validations';
import { SVRL, SVRLFailedAssertion } from '../../types/validations';

describe('Validation helper functions', () => {
  const mockAssertion: SVRLFailedAssertion = {
    id: '1',
    location: 'location',
    role: 'error',
    'svrl:text': 'test text',
    'svrl:diagnostic-reference': {
      content: 'content',
      diagnostic: 'diagnostic',
    },
    test: 'test',
    see: 'see',
  };

  const mockSVRL: SVRL = {
    'svrl:schematron-output': {
      'svrl:failed-assert': [mockAssertion],
    },
  };

  const mockInvalidSVRL = {
    'invalid-key': 'invalid value',
  };

  describe('isSVRL', () => {
    it('should return true if the data is SVRL', () => {
      expect(isSVRL(mockSVRL)).toBe(true);
    });

    it('should return false if the data is not SVRL', () => {
      expect(isSVRL(mockInvalidSVRL)).toBe(false);
    });
  });

  describe('hasFailedAssert', () => {
    it('should return true if SVRL has failed assertions', () => {
      expect(hasFailedAssert(mockSVRL)).toBe(true);
    });

    it('should return false if SVRL has no failed assertions', () => {
      const svrlWithoutFailedAsserts: SVRL = {
        ...mockSVRL,
        'svrl:schematron-output': {},
      };
      expect(hasFailedAssert(svrlWithoutFailedAsserts)).toBe(false);
    });
  });

  describe('getSVRLFailedAssertions', () => {
    it('should return the failed assertions', () => {
      expect(getSVRLFailedAssertions(mockSVRL)).toEqual([mockAssertion]);
    });

    it('should return undefined if there are no failed assertions', () => {
      const svrlWithoutFailedAsserts: SVRL = {
        ...mockSVRL,
        'svrl:schematron-output': {},
      };
      expect(getSVRLFailedAssertions(svrlWithoutFailedAsserts)).toBeUndefined();
    });
  });
});
