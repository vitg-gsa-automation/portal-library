import React, { ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './index.module.scss';

export interface SpaceBetweenProps {
  direction?: 'vertical' | 'horizontal';
  size?: 'xxs' | 'xs' | 'sm' | 'l' | 'xl';
  children: ReactNode;
}

export function SpaceBetween({
  size = 'xl',
  direction = 'vertical',
  children,
}: SpaceBetweenProps) {
  return (
    <div className={clsx(styles.root, styles[direction], styles[size])}>
      {React.Children.map(children, (child, index) => {
        if (!child) return null;
        return (
          <div key={index} className={styles.child}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
