import { StatusIndicatorType } from '../components/StatusIndicator';
import { PackageStatus } from '../types/packages';

export function getPackageStatusIndicatorType(
  status: PackageStatus
): StatusIndicatorType {
  switch (status) {
    case 'cancelled':
      return 'warning';
    case 'closed':
      return 'warning';
    case 'fedramp ready':
      return 'success';
    case 'in progress':
      return 'in-progress';
    case 'pending':
      return 'pending';
  }
}

export function stringToPackageStatus(str: string): PackageStatus | undefined {
  const statuses: Array<PackageStatus> = [
    'cancelled',
    'closed',
    'fedramp ready',
    'in progress',
    'pending',
  ];
  const lowerCasedStr = str.toLowerCase();
  return statuses.includes(lowerCasedStr as PackageStatus)
    ? (lowerCasedStr as PackageStatus)
    : undefined;
}
