import { PackageStatus } from '../../types/packages';
import {
  getPackageStatusIndicatorType,
  stringToPackageStatus,
} from '../packages';

describe('getPackageStatusIndicatorType', () => {
  it('should return the correct status indicator type', () => {
    expect(getPackageStatusIndicatorType(PackageStatus.Cancelled)).toBe(
      'error'
    );
    expect(getPackageStatusIndicatorType(PackageStatus.Closed)).toBe('error');
    expect(getPackageStatusIndicatorType(PackageStatus.FedRampReady)).toBe(
      'success'
    );
    expect(getPackageStatusIndicatorType(PackageStatus.InProgress)).toBe(
      'in-progress'
    );
    expect(getPackageStatusIndicatorType(PackageStatus.Pending)).toBe(
      'pending'
    );
  });
});

describe('stringToPackageStatus', () => {
  it('should return the correct PackageStatus for valid inputs', () => {
    expect(stringToPackageStatus('Cancelled')).toBe(PackageStatus.Cancelled);
    expect(stringToPackageStatus('Closed')).toBe(PackageStatus.Closed);
    expect(stringToPackageStatus('Fedramp Ready')).toBe(
      PackageStatus.FedRampReady
    );
    expect(stringToPackageStatus('In Progress')).toBe(PackageStatus.InProgress);
    expect(stringToPackageStatus('Pending')).toBe(PackageStatus.Pending);
  });

  it('should return undefined for invalid inputs', () => {
    expect(stringToPackageStatus('Invalid Status')).toBeUndefined();
  });
});
