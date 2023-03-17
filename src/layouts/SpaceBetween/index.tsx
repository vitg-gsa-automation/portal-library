import React, { ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './index.module.scss';

interface SpaceBetweenProps {
  direction?: 'vertical' | 'horizontal';
  size?: 'xs' | 'sm' | 'l';
  children: ReactNode;
}

export function SpaceBetween({
  size = 'l',
  direction = 'vertical',
  children,
}: SpaceBetweenProps) {
  return (
    <div className={clsx(styles.root, styles[`root--${direction}`])}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={clsx(styles.child, styles[`child-${direction}-${size}`])}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
