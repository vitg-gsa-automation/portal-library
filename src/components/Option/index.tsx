import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: string;
  children: React.ReactNode;
}

export const ListItem = forwardRef(
  (
    { icon, className, children, ...props }: ListItemProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ) => {
    return (
      <li ref={ref} className={clsx(styles.root, className)} {...props}>
        {icon && (
          <MaterialIcon icon={icon} className={styles.icon} fontSize="1.6rem" />
        )}
        <span className={styles.content}>{children}</span>
      </li>
    );
  }
);
