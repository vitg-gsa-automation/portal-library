import { RowSelectionState } from '@tanstack/react-table';
import { useState } from 'react';
interface GlobalFilter {
  filteringText: string;
  [filterName: string]: string;
}
interface UseCollectionOptions<T> {}
export function useCollection<T = any>(options?: UseCollectionOptions<T>) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [globalFilter, setGlobalFilter] = useState<GlobalFilter>({
    filteringText: '',
  });
  return {
    collectionProps: {
      rowSelection,
      onRowSelectionChange: setRowSelection,
    },
    filterProps: {
      globalFilter,
      onGlobalFilterChange: setGlobalFilter,
    },
  };
}
