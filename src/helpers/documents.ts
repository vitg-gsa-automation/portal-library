import { DocStatus, DocTypeAbbrev } from '../types/documents';
import { StatusIndicatorType } from '../components/StatusIndicator';
import { extractFileExtension } from './files';

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

export function stringToDocTypeAbbrev(str: string): DocTypeAbbrev | undefined {
  const validDocTypeAbbrevs = new Set<DocTypeAbbrev>([
    'ssp',
    'sap',
    'sar',
    'poam',
  ]);
  const lowercase = str.toLowerCase();
  if (validDocTypeAbbrevs.has(lowercase as DocTypeAbbrev)) {
    return lowercase as DocTypeAbbrev;
  }
  return;
}
