import { ReactElement, ReactNode } from 'react';
import styles from './index.module.scss';

interface TableToolsProps {
  filter?: ReactNode;
  pagination?: ReactNode;
  preferences?: ReactElement;
}
export function TableTools({
  filter,
  pagination,
  preferences,
  ...props
}: TableToolsProps) {
  return (
    <div className={styles.root} {...props}>
      <div className={styles.filters}>{filter}</div>
      <div className={styles.right}>
        <div className={styles.pagination}>{pagination}</div>
        {preferences && <div className={styles.preferences}>{preferences}</div>}
      </div>
    </div>
  );
}
