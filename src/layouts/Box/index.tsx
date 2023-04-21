import clsx from 'clsx';
import styles from './index.module.scss';
import { ReactNode } from 'react';
export interface BoxProps {
  float?: 'left' | 'right';
  padding?: string;
  margin?: string;
  children: ReactNode;
}
export function Box({ float, children }: BoxProps) {
  return (
    <div className={clsx(styles.root, float && styles[float])}>{children}</div>
  );
}
