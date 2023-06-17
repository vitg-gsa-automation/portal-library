import { SVRL } from '../types/validations';

export function isSVRL(data: any) {
  return !!data['svrl:schematron-output'];
}

export function hasFailedAssert(svrl: SVRL) {
  return !!svrl['svrl:schematron-output']['svrl:failed-assert'];
}

export function getSVRLFailedAssertions(svrl: SVRL) {
  return svrl['svrl:schematron-output']['svrl:failed-assert'];
}
