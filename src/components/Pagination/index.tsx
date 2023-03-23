import { Table } from '@tanstack/react-table';
import { MaterialIconButton } from '../MaterialIcon';
import styles from './index.module.scss';

interface PaginationProps {
  table: Table<any>;
}
export function Pagination({ table }: PaginationProps) {
  return (
    <div className={styles.root}>
      <MaterialIconButton
        icon="navigate_before"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      />
      <div className={styles.page}>
        {table.getState().pagination.pageIndex + 1}
      </div>
      <MaterialIconButton
        icon="navigate_next"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      />
    </div>
  );
}
