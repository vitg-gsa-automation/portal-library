import { forwardRef } from 'react';
import styles from './index.module.scss';

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export const ListItem = forwardRef(
  (
    { children, ...props }: ListItemProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ) => {
    return (
      <li ref={ref} className={styles.root} {...props}>
        {children}
      </li>
    );
  }
);
