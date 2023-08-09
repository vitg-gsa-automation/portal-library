import {
  ColumnDef,
  FilterFnOption,
  InitialTableState,
  OnChangeFn,
  RowSelectionState,
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Pagination } from '../../components/Pagination';
import { Radio } from '../../components/Radio';
import { RadioGroupRoot } from '../../components/Radio';
import { StatusIndicator } from '../../components/StatusIndicator';
import { Empty } from '../../components/Empty';
import { Loader } from '../../components/Loader';
import { MaterialIcon } from '../../components/MaterialIcon';
import { Card } from '../../layouts/Card';
import styles from './index.module.scss';
import { Thead } from './thead';

export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  variant?: 'card' | 'embedded' | 'stacked';
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  onRowClick?: (rowData: T) => unknown;
  header?: ReactElement;
  footer?: ReactElement;
  filter?: ReactNode;
  globalFilterFn?: FilterFnOption<T>;
  pagination?: boolean;
  empty?: ReactNode;
  loading?: boolean;
  loadingText?: string;
  error?: string;
  columnVisibility?: ColumnVisibility;
  initialState?: InitialTableState;
  selectionType?: 'single' | 'multi';
  wrapLines?: boolean;
  resizableColumns?: boolean;
  globalFilter?: any;
  onGlobalFilterChange?: OnChangeFn<any>;
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
  variant = 'card',
  rowSelection,
  columnVisibility,
  onRowSelectionChange,
  onRowClick,
  header,
  footer,
  filter,
  pagination,
  empty,
  loading,
  loadingText = 'Loading resources',
  error,
  initialState,
  globalFilterFn,
  selectionType,
  wrapLines = true,
  resizableColumns,
  globalFilter,
  onGlobalFilterChange,
  ...props
}: TableProps<T>) => {
  const columnHelper = createColumnHelper<T>();

  const [sorting, setSorting] = useState<SortingState>([]);
  const internalColumns = useMemo(() => {
    if (selectionType === 'multi') {
      return [
        columnHelper.display({
          id: 'select',
          size: 40,
          minSize: 40,
          header: ({ table }) => (
            <div className="center-cell">
              <Checkbox
                checked={table.getIsAllRowsSelected()}
                onCheckedChange={(checked) =>
                  table.toggleAllRowsSelected(!!checked)
                }
              />
            </div>
          ),
          cell: ({ row }) => (
            <div className="center-cell">
              <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={row.getToggleSelectedHandler()}
              />
            </div>
          ),
        }),
      ];
    }
    if (selectionType === 'single') {
      return [
        columnHelper.display({
          id: 'select',
          size: 40,
          minSize: 40,
          cell: (info) => (
            <div className="center-cell">
              <RadioGroupRoot
                onValueChange={info.row.getToggleSelectedHandler()}
              >
                <Radio
                  checked={info.row.getIsSelected()}
                  value={''}
                  id={info.row.index}
                />
              </RadioGroupRoot>
            </div>
          ),
        }),
      ];
    }
    return [];
  }, [columnHelper]);

  const table = useReactTable<T>({
    data,
    defaultColumn: {
      cell: (info) => info.getValue() || '-',
    },
    columns: [...internalColumns, ...columns],
    initialState,
    state: {
      rowSelection,
      sorting,
      columnVisibility,
      globalFilter,
    },
    globalFilterFn:
      globalFilterFn ||
      ((row, columnId, filterValue) => {
        console.log('row', row);
        const search = filterValue.filteringText.toLowerCase();

        let value = row.getValue(columnId) as string;
        if (typeof value === 'number') value = String(value);

        return value?.toLowerCase().includes(search);
      }),
    onGlobalFilterChange,
    onSortingChange: setSorting,
    onRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: pagination ? getPaginationRowModel() : undefined,
    debugTable: false,
    enableSortingRemoval: false,
    sortDescFirst: false,
    enableMultiRowSelection: selectionType === 'multi',
    columnResizeMode: resizableColumns ? 'onChange' : undefined,
  });
  const hasHeader = !!(header || filter);
  const hasTools = !!(filter || pagination);
  const hasNoMatches = !table.getFilteredRowModel().rows.length;

  return (
    <Card
      variant={variant === 'card' ? 'default' : variant}
      header={
        hasHeader && (
          <div>
            {header}
            {hasTools && (
              <TableTools
                filter={filter}
                pagination={pagination && <Pagination table={table} />}
              />
            )}
          </div>
        )
      }
      footer={footer}
    >
      <div className={styles.wrapper}>
        <table
          className={clsx(styles.table, {
            [styles.resizable]: resizableColumns,
          })}
          data-cy="table"
          {...props}
        >
          <Thead
            table={table}
            resizableColumns={resizableColumns}
            wrapLines={wrapLines}
          />
          {!loading && (
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
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className={clsx(styles.cell, {
                            [styles['no-wrapped-lines']]: !wrapLines,
                            [styles.select]: cell.column.id === 'select',
                          })}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </TableRow>
                );
              })}
            </tbody>
          )}
        </table>
        {loading ? (
          <div className={styles['loading']}>
            <StatusIndicator type="loading">{loadingText}</StatusIndicator>
          </div>
        ) : error ? (
          <Empty title={error} />
        ) : data.length === 0 ? (
          empty || <Empty />
        ) : hasNoMatches ? (
          <Empty
            title="No matches"
            description="We can’t find a match."
            actions={<Button text="Clear filter" color="secondary" />}
          />
        ) : null}
      </div>
    </Card>
  );
};

function TableRow({ selected, children, ...props }: TableRowProps) {
  return (
    <tr
      role="row"
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
  filter?: ReactNode;
  pagination?: ReactNode;
}
export function TableTools({ filter, pagination, ...props }: TableToolsProps) {
  return (
    <div className={styles.tools} {...props}>
      <div className={styles['tools__filters']}>{filter}</div>
      <div className={styles['tools__pagination']}>{pagination}</div>
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
