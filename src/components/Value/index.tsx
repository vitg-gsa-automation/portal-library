import { ReactNode } from 'react';
import { MaterialIcon } from '../MaterialIcon';

import styles from './index.module.scss';

interface ValueProps {
  copyable?: boolean;
  children?: ReactNode;
}

export function Value({ copyable, children }: ValueProps) {
  return (
    <div className={styles.root}>
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
