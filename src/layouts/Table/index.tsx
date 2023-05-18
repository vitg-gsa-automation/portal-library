import {
  ColumnDef,
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

import {
  Button,
  Checkbox,
  Pagination,
  Radio,
  RadioGroupRoot,
  StatusIndicator,
} from '../../components';
import { Empty } from '../../components/Empty';
import { Loader } from '../../components/Loader';
import { MaterialIcon } from '../../components/MaterialIcon';
import { Card } from '../../layouts/Card';
import styles from './index.module.scss';

export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  onRowClick?: (rowData: T) => unknown;
  header?: ReactElement;
  footer?: ReactElement;
  filter?: ReactNode;
  pagination?: boolean;
  empty?: ReactNode;
  loading?: boolean;
  loadingText?: string;
  error?: string;
  columnVisibility?: ColumnVisibility;
  initialState?: InitialTableState;
  filteringText?: string;
  selectionType?: 'single' | 'multi';
  wrapLines?: boolean;
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
  filteringText,
  selectionType,
  wrapLines = true,
  ...props
}: TableProps<T>) => {
  const columnHelper = createColumnHelper<T>();

  const [internalGlobalFilter, setInternalGlobalFilter] =
    useState(filteringText);
  const [sorting, setSorting] = useState<SortingState>([]);
  const internalColumns = useMemo(() => {
    if (selectionType === 'multi') {
      return [
        columnHelper.display({
          id: 'select',
          size: 40,
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

  useEffect(() => {
    setInternalGlobalFilter(filteringText);
  }, [filteringText]);

  const table = useReactTable<T>({
    data,
    columns: [...internalColumns, ...columns],
    initialState,
    state: {
      rowSelection,
      sorting,
      columnVisibility,
      globalFilter: internalGlobalFilter,
    },
    globalFilterFn: (row, columnId, filterValue: string) => {
      const search = filterValue.toLowerCase();

      let value = row.getValue(columnId) as string;
      if (typeof value === 'number') value = String(value);

      return value?.toLowerCase().includes(search);
    },
    onGlobalFilterChange: setInternalGlobalFilter,
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
  });
  const hasHeader = !!(header || filter);
  const hasTools = !!(filter || pagination);
  const hasNoMatches = !table.getFilteredRowModel().rows.length;

  return (
    <Card
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
        <table className={styles.table} data-cy="table" {...props}>
          <thead data-cy="thead">
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
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={clsx(styles.cell, {
                          [styles['no-wrapped-lines']]: !wrapLines,
                        })}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
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
          empty || (
            <Empty title="No resources" description="No resources to display" />
          )
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
