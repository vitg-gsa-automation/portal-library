import { OSCALExtension } from 'types';
import { highlight } from '../helpers/highlight-js';
import { useMemo } from 'react';

export function useHighlight(fileString?: string, language?: OSCALExtension) {
  const html = useMemo(() => {
    if (!fileString || !language) return;
    return highlight(fileString, language);
  }, [fileString]);
  return html;
}
