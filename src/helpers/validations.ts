import { SVRL } from '../types/validations';

export function isSVRL(data: any) {
  if (typeof data !== 'object') return false;
  return !!data?.['svrl:schematron-output'];
}

export function hasFailedAssert(svrl: SVRL) {
  return !!svrl['svrl:schematron-output']?.['svrl:failed-assert'];
}

export function getSVRLFailedAssertions(svrl: SVRL) {
  return svrl['svrl:schematron-output']?.['svrl:failed-assert'];
}

export function getHasSVRLFatalsOrErrors(svrl: SVRL) {
  return !!getSVRLFailedAssertions(svrl)?.some((svrlFailedAssertion) => {
    return (
      svrlFailedAssertion.role.toLowerCase() === 'error' ||
      svrlFailedAssertion.role.toLowerCase() === 'fatal'
    );
  });
}
