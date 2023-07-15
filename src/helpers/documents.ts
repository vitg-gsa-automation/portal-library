import { DocStatus } from '../types/documents';
import { StatusIndicatorType } from '../components/StatusIndicator';

export function getDocumentStatusIndicatorType(
  status: DocStatus
): StatusIndicatorType {
  switch (status) {
    case DocStatus.PendingReview:
      return 'pending';
    case DocStatus.NotValidated:
      return 'error';
    case DocStatus.Validated:
      return 'success';
    case DocStatus.ValidationErrors:
      return 'error';
  }
}

export function stringToDocStatus(str: string): DocStatus | undefined {
  const lowerCasedStr = str.toLowerCase();
  const statuses = Object.values(DocStatus);

  return statuses.includes(lowerCasedStr as any)
    ? (lowerCasedStr as DocStatus)
    : undefined;
}
