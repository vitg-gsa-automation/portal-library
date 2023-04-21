import clsx from 'clsx';
import styles from './index.module.scss';
import { ReactNode } from 'react';
export interface BoxProps {
  float?: 'left' | 'right';
  padding?: string;
  margin?: string;
  textAlign?: 'left' | 'center' | 'right';
  children: ReactNode;
}
export function Box({ float, children, textAlign }: BoxProps) {
  return (
    <div
      className={clsx(styles.root, float && styles[float])}
      style={{ textAlign }}
    >
      {children}
    </div>
  );
}
