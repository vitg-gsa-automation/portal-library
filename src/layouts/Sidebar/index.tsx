import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Sidebar = forwardRef(
  ({ children, ...props }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={clsx(styles.root, props.className)}>
        {children}
      </div>
    );
  }
);
