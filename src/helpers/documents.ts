import { DocStatus } from '../types/documents';
import { StatusIndicatorType } from '../components/StatusIndicator';

export function getDocumentStatusIndicatorType(
  status: DocStatus
): StatusIndicatorType {
  switch (status) {
    case 'Pending':
    case 'Pending Review':
      return 'pending';
    case 'Not Validated':
    case 'not validated':
      return 'warning';
    case 'validated':
      return 'success';
    case 'Validation Errors':
    case 'validation errors':
      return 'error';
  }
}

export function stringToDocStatus(str: string): DocStatus | undefined {
  const statuses: Array<DocStatus> = [
    'Pending',
    'Pending Review',
    'Not Validated',
    'not validated',
    'validated',
    'Validation Errors',
    'not validated',
  ];
  return statuses.includes(str as DocStatus) ? (str as DocStatus) : undefined;
}


