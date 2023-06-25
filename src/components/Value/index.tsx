import { ReactNode } from 'react';
import { MaterialIcon } from '../MaterialIcon';

import styles from './index.module.scss';
import clsx from 'clsx';

export interface ValueProps {
  variant?: 'default' | 'large';
  copyable?: boolean;
  children?: ReactNode;
}

export function Value({ variant = 'default', copyable, children }: ValueProps) {
  return (
    <div className={clsx(styles.root, styles[variant])}>
      {copyable && (
        <MaterialIcon
          icon="content_copy"
          className={styles.icon}
          fontSize="1.6rem"
          onClick={async () => {
            await navigator.clipboard.writeText(String(children));
          }}
        />
      )}
      {children}
    </div>
  );
}
