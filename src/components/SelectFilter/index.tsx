import { ReactNode } from 'react';
import styles from './index.module.scss';

export interface SelectFilterProps {
  children: ReactNode;
}

export function SelectFilter({ children }: SelectFilterProps) {
  return <div className={styles.root}>{children}</div>;
}
