import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'green' | 'red' | 'gray' | 'orange';
  children: ReactNode;
}

export function Chip({ color = 'green', children, ...props }: ChipProps) {
  return (
    <div className={clsx(styles.root, styles[color])} {...props}>
      <span className={styles.text}>{children}</span>
    </div>
  );
}
