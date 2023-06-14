import { ReactNode } from 'react';
import styles from './index.module.scss';

export interface FiltersProps {
  children: ReactNode;
}

export function Filters({ children }: FiltersProps) {
  return <div className={styles.root}>{children}</div>;
}
