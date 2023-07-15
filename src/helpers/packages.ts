import { StatusIndicatorType } from '../components/StatusIndicator';
import { PackageStatus } from '../types/packages';

export function getPackageStatusIndicatorType(
  status: PackageStatus
): StatusIndicatorType {
  switch (status) {
    case PackageStatus.Cancelled:
    case PackageStatus.Closed:
      return StatusIndicatorType.Error;
    case PackageStatus.FedRampReady:
      return StatusIndicatorType.Success;
    case PackageStatus.InProgress:
      return StatusIndicatorType.InProgress;
    case PackageStatus.Pending:
      return StatusIndicatorType.Pending;
  }
}

export function stringToPackageStatus(str: string): PackageStatus | undefined {
  const lowerCasedStr = str.toLowerCase();
  const statuses = Object.values(PackageStatus);

  return statuses.includes(lowerCasedStr as any)
    ? (lowerCasedStr as PackageStatus)
    : undefined;
}
