import { Table } from '@tanstack/react-table';
import { MaterialIconButton } from '../MaterialIcon';
import styles from './index.module.scss';
import clsx from 'clsx';

interface PaginationProps {
  table: Table<any>;
}
export function Pagination({ table }: PaginationProps) {
  const isPrevDisabled = !table.getCanPreviousPage();
  const isNextDisabled = !table.getCanNextPage();
  return (
    <div className={styles.root}>
      <MaterialIconButton
        fontSize="2.8rem"
        icon="navigate_before"
        onClick={() => table.previousPage()}
        disabled={isPrevDisabled}
        className={clsx(styles.arrow, {
          [styles.disabled]: isPrevDisabled,
        })}
      />
      <div className={styles.page}>
        {table.getState().pagination.pageIndex + 1}
      </div>
      <MaterialIconButton
        fontSize="2.8rem"
        icon="navigate_next"
        onClick={() => table.nextPage()}
        disabled={isNextDisabled}
        className={clsx(styles.arrow, {
          [styles.disabled]: isNextDisabled,
        })}
      />
    </div>
  );
}
