import React, { ReactElement, ReactNode, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  RowSelectionState,
  SortingState,
  useReactTable,
  PaginationState,
  Table as TableType,
  TableOptions,
} from '@tanstack/react-table';
import clsx from 'clsx';

import styles from './index.module.scss';
import {
  MaterialIcon,
  MaterialIconButton,
} from '../../components/MaterialIcon';
import { Loader } from '../../components/Loader';
import { Empty } from '../../components/Empty';

export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  rowSelection?: RowSelectionState;
  setRowSelection?: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  onRowClick?: (rowData: T) => unknown;
  header?: (table: TableType<T>) => ReactElement;
  filters?: ReactNode;
  loading?: boolean;
  error?: string;
  columnVisibility?: ColumnVisibility;
  options?: Partial<TableOptions<T>>;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  selected: boolean;
  children: ReactNode;
}

interface FlexCellProps {
  children: ReactNode;
  text: string;
}

interface ColumnVisibility {
  [key: string]: boolean;
}

export const Table = <T extends unknown>({
  data,
  columns,
  rowSelection,
  columnVisibility,
  setRowSelection,
  onRowClick,
  header,
  filters,
  loading,
  error,
  options,
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 50,
  });

  const table = useReactTable<T>({
    data,
    columns,
    pageCount: Math.ceil(data.length / pagination.pageSize),
    state: {
      rowSelection,
      sorting,
      pagination,
      columnVisibility,
    },

    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
    enableSortingRemoval: false,
    sortDescFirst: false,
    ...options,
  });

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loader loading size={20} speedMultiplier={1} borderWidth={3} />
      </div>
    );
  }
  return (
    <React.Fragment>
      {header && header(table)}
      <table className={styles.root}>
        <thead>
          <tr>
            {table.getHeaderGroups()[0].headers.map((header) => {
              const colWidth = header.getSize();
              return (
                <th
                  key={header.id}
                  style={
                    colWidth !== 150 ? { width: header.getSize() } : undefined
                  }
                >
                  {header.column.getCanSort() ? (
                    <button
                      className={clsx(
                        styles['heading-box'],
                        header.column.getIsSorted() &&
                          styles['heading-box--sorted']
                      )}
                      onClick={header.column.getToggleSortingHandler()}
                      type="button"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <MaterialIcon
                        icon="expand_more"
                        className={clsx(
                          styles.icon,
                          styles[
                            `icon--${header.column.getIsSorted() as string}`
                          ]
                        )}
                      />
                    </button>
                  ) : (
                    <div className={styles['heading-box--alt']}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <TableRow
                selected={rowSelection ? row.getIsSelected() : false}
                key={row.id}
                onClick={() => {
                  if (!onRowClick) return;
                  onRowClick(row.original);
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </TableRow>
            );
          })}
        </tbody>
      </table>
      {error && <Empty main={error} />}
      {data.length === 0 && !error ? (
        <Empty main="No resources" text="No resources to display" />
      ) : null}
    </React.Fragment>
  );
};

function TableRow({ selected, children, ...props }: TableRowProps) {
  return (
    <tr
      className={clsx(styles.row, selected && styles['row--selected'])}
      {...props}
    >
      {children}
    </tr>
  );
}
interface TableHeaderProps {
  title: ReactNode;
  text?: string;
  actions?: ReactNode;
  tools?: ReactNode;
}
export function TableHeader({
  text,
  actions,
  title,
  tools,
  ...props
}: TableHeaderProps) {
  return (
    <div className={styles.header} {...props}>
      <div className={styles['header__container']}>
        <div className={styles['header__content']}>
          {title}
          {text && <p className={styles['header__text']}>{text}</p>}
        </div>
        {actions && <div className={styles['header__actions']}>{actions}</div>}
      </div>
      {tools}
    </div>
  );
}

interface TableToolsProps {
  table: TableType<any>;
  filters?: ReactNode;
}
export function TableTools({ filters, table, ...props }: TableToolsProps) {
  return (
    <div className={styles.tools} {...props}>
      <div className={styles['tools__filters']}>{filters}</div>
      <div className={styles['tools__pagination']}>
        <MaterialIconButton
          icon="navigate_before"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        />
        <div className={styles['tools__pagination__page']}>
          {table.getState().pagination.pageIndex + 1}
        </div>
        <MaterialIconButton
          icon="navigate_next"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        />
      </div>
    </div>
  );
}

export function FlexCell({ children, text }: FlexCellProps) {
  return (
    <div className={styles['flex-cell']}>
      {children}
      <div className={styles['flex-cell__text']}>{text}</div>
    </div>
  );
}
