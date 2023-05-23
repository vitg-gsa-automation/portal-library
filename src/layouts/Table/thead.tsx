import { Header, Table, flexRender } from '@tanstack/react-table';
import styles from './index.module.scss';
import clsx from 'clsx';
import { MaterialIcon } from '../../components/MaterialIcon';
import React from 'react';

interface TheadProps {
  table: Table<any>;
  resizableColumns?: boolean;
  wrapLines?: boolean;
}
export function Thead({ table, resizableColumns, wrapLines }: TheadProps) {
  return (
    <thead data-cy="thead">
      <tr>
        {table.getHeaderGroups()[0].headers.map((header) => {
          const isSelectHeaderCell = header.id === 'select';
          const isSortable = header.column.getCanSort();

          const renderHeaderContents = function () {
            const renderCell = function () {
              return (
                <div
                  className={clsx(styles['header-cell-text'], {
                    [styles['no-wrapped-lines']]: !wrapLines,
                  })}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </div>
              );
            };
            if (isSelectHeaderCell) {
              return renderCell();
            } else {
              return (
                <React.Fragment>
                  {isSortable ? (
                    <button
                      className={clsx(styles['header-box'], {
                        [styles.sorted]: header.column.getIsSorted(),
                      })}
                      onClick={header.column.getToggleSortingHandler()}
                      type="button"
                    >
                      {renderCell()}
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
                    <div className={styles['header-box--alt']}>
                      {renderCell()}
                    </div>
                  )}
                  {resizableColumns && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={clsx(styles.resizer)}
                    />
                  )}
                </React.Fragment>
              );
            }
          };
          return (
            <th
              key={header.id}
              className={clsx(styles['header-cell'], {
                [styles.resizable]: resizableColumns && !isSelectHeaderCell,
                [styles.sortable]: isSortable,
                [styles.select]: isSelectHeaderCell,
              })}
              style={{
                width: header.getSize() !== 0 ? header.getSize() : undefined,
              }}
            >
              {renderHeaderContents()}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
