import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'green' | 'red' | 'gray' | 'orange';
  children: ReactNode;
}

function Chip({ color = 'green', children, ...props }: Props) {
  return (
    <div className={clsx(styles.root, styles[color])} {...props}>
      <span className={styles.text}>{children}</span>
    </div>
  );
}

export default Chip;
