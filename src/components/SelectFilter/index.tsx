import { ReactNode } from 'react';
import styles from './index.module.scss';

export interface SelectFilterProps {
  children: ReactNode;
  maxWidth?: string;
}

export function SelectFilter({ maxWidth, children }: SelectFilterProps) {
  return (
    <div className={styles.root} style={{ maxWidth }}>
      {children}
    </div>
  );
}
