import { DocStatus } from '../types/documents';
import { StatusIndicatorType } from '../components/StatusIndicator';

export function getDocumentStatusIndicatorType(
  status: DocStatus
): StatusIndicatorType {
  switch (status) {
    case DocStatus.PendingReview:
      return StatusIndicatorType.Pending;
    case DocStatus.NotValidated:
      return StatusIndicatorType.Error;
    case DocStatus.Validated:
      return StatusIndicatorType.Success;
    case DocStatus.ValidationErrors:
      return StatusIndicatorType.Error;
  }
}

export function stringToDocStatus(str: string): DocStatus | undefined {
  const lowerCasedStr = str.toLowerCase();
  const statuses = Object.values(DocStatus);

  return statuses.includes(lowerCasedStr as any)
    ? (lowerCasedStr as DocStatus)
    : undefined;
}
