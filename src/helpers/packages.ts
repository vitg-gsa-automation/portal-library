import { StatusIndicatorType } from '../components/StatusIndicator';
import { PackageStatus } from '../types/packages';

export function getPackageStatusIndicatorType(
  status: PackageStatus
): StatusIndicatorType {
  switch (status) {
    case PackageStatus.Cancelled:
    case PackageStatus.Closed:
      return 'error';
    case PackageStatus.FedRampReady:
      return 'success';
    case PackageStatus.InProgress:
      return 'in-progress';
    case PackageStatus.Pending:
      return 'pending';
  }
}

export function stringToPackageStatus(str: string): PackageStatus | undefined {
  const lowerCasedStr = str.toLowerCase();
  const statuses = Object.values(PackageStatus);

  return statuses.includes(lowerCasedStr as any)
    ? (lowerCasedStr as PackageStatus)
    : undefined;
}
