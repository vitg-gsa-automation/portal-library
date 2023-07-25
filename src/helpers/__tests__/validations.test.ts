import {
  isSVRL,
  hasFailedAssert,
  getSVRLFailedAssertions,
  getHasSVRLFatalsOrErrors,
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

    it('should return false if the data is a string', () => {
      expect(isSVRL('not an SVRL')).toBe(false);
    });

    it('should return false if the data is null', () => {
      expect(isSVRL(null)).toBe(false);
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

  describe('getHasSVRLFatalsOrErrors', () => {
    it('should return true if there are errors or fatal', () => {
      expect(getHasSVRLFatalsOrErrors(mockSVRL)).toBeTruthy();
    });

    it('should return false if there are no errors or fatal', () => {
      const svrlWithNoErrorOrFatal: SVRL = {
        ...mockSVRL,
        'svrl:schematron-output': {
          'svrl:failed-assert': [
            {
              id: 'test',
              location: 'test',
              test: 'test',
              role: 'information',
              'svrl:text': 'test',
              'svrl:diagnostic-reference': { content: '', diagnostic: '' },
            },
          ],
        },
      };

      expect(getHasSVRLFatalsOrErrors(svrlWithNoErrorOrFatal)).toBeFalsy();
    });

    it('should return false if failedAssertions are undefined', () => {
      const svrlWithUndefinedAssertions: SVRL = {
        ...mockSVRL,
        'svrl:schematron-output': {},
      };

      expect(getHasSVRLFatalsOrErrors(svrlWithUndefinedAssertions)).toBeFalsy();
    });
  });
});
