import { ReactNode } from 'react';

import styles from './index.module.scss';

interface PropertyProps {
  label: string;
  children: ReactNode;
}

export function Property({ label, children }: PropertyProps) {
  return (
    <div className={styles.root}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{children}</span>
    </div>
  );
}
