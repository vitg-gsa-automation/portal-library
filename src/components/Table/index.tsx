import {
  ColumnDef,
  FilterFnOption,
  InitialTableState,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
  VisibilityState,
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

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Pagination } from '../Pagination';
import { Radio } from '../Radio';
import { RadioGroupRoot } from '../Radio';
import { StatusIndicator } from '../StatusIndicator';
import { Empty } from '../Empty';
import { Loader } from '../Loader';
import { MaterialIcon } from '../MaterialIcon';
import { Card } from '../../layouts/Card';
import styles from './index.module.scss';
import { Thead } from './thead';
import { TableTools } from './table-tools';
import { useDynamicOverlap } from '../../hooks/useDynamicOverlap';

export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  variant?: 'card' | 'embedded' | 'stacked' | 'full-page';
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  onRowClick?: (rowData: T) => unknown;
  header?: ReactElement;
  footer?: ReactElement;
  filter?: ReactNode;
  globalFilterFn?: FilterFnOption<T>;
  pagination?: PaginationState;
  preferences?: ReactElement;
  empty?: ReactNode;
  loading?: boolean;
  loadingText?: string;
  error?: string;
  columnDisplay?: ReadonlyArray<ColumnDisplayProperties>;
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

interface ColumnDisplayProperties {
  id: string;
  visible: boolean;
}

export type ColumnVisibility<T = any> = {
  [key in keyof T]?: boolean;
};

export const Table = <T extends unknown>({
  data,
  columns,
  variant = 'card',
  columnDisplay,
  rowSelection,
  onRowSelectionChange,
  onRowClick,
  header,
  footer,
  filter,
  pagination,
  preferences,
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
  const [internalPagination, setInternalPagination] =
    React.useState<PaginationState>({
      pageIndex: pagination?.pageIndex || 0,
      pageSize: pagination?.pageSize || 10,
    });

  const hasDynamicHeight = variant === 'full-page';
  const overlapElementRef = useDynamicOverlap<HTMLDivElement>({
    disabled: !hasDynamicHeight,
  });

  useEffect(() => {
    if (!pagination) return;
    setInternalPagination((prevState) => ({
      ...prevState,
      pageSize: pagination.pageSize,
    }));
  }, [pagination]);

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

  const columnVisibility = useMemo(() => {
    if (!columnDisplay) return;
    const result: VisibilityState = {};
    columnDisplay?.forEach((option) => {
      result[option.id] = option.visible;
    });
    return result;
  }, [columnDisplay]);

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
      pagination: internalPagination,
      columnVisibility,
      globalFilter,
    },
    globalFilterFn:
      globalFilterFn ||
      ((row, columnId, filterValue) => {
        const search = filterValue.filteringText.toLowerCase();

        let value = row.getValue(columnId) as string;
        if (typeof value === 'number') value = String(value);

        return value?.toLowerCase().includes(search);
      }),
    onGlobalFilterChange,
    onSortingChange: setSorting,
    onRowSelectionChange,
    onPaginationChange: setInternalPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
    enableSortingRemoval: false,
    sortDescFirst: false,
    enableMultiRowSelection: selectionType === 'multi',
    columnResizeMode: resizableColumns ? 'onChange' : undefined,
  });
  const hasHeader = !!(header || filter || preferences);
  const hasTools = !!(filter || pagination || preferences);
  const hasNoMatches = !table.getFilteredRowModel().rows.length;

  const getCardVariant = function () {
    switch (variant) {
      case 'card':
        return 'default';
      case 'full-page':
        return 'embedded';

      default:
        return variant;
    }
  };

  return (
    <Card
      variant={getCardVariant()}
      disableHeaderPaddings={variant === 'full-page'}
      header={
        hasHeader && (
          <div
            ref={overlapElementRef}
            className={clsx(hasDynamicHeight && styles['dark-header'])}
          >
            <div
              className={clsx(
                styles['header-tools'],
                styles[`variant-${variant}`]
              )}
            >
              {header}
              {hasTools && (
                <TableTools
                  filter={filter}
                  pagination={pagination && <Pagination table={table} />}
                  preferences={preferences}
                />
              )}
            </div>
          </div>
        )
      }
      footer={footer}
    >
      <div className={clsx(styles.wrapper, styles[variant])}>
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

export function FlexCell({ children, text }: FlexCellProps) {
  return (
    <div className={styles['flex-cell']}>
      {children}
      <div className={styles['flex-cell__text']}>{text}</div>
    </div>
  );
}
