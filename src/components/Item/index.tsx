import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import MaterialIcon from '../MaterialIcon';

export interface ItemProps extends React.HTMLAttributes<HTMLLIElement> {
  icon?: string;
  children: React.ReactNode;
}

function Item(
  { icon, className, children, ...props }: ItemProps,
  ref: React.ForwardedRef<HTMLLIElement>
) {
  return (
    <li ref={ref} className={clsx(styles.root, className)} {...props}>
      {icon && (
        <MaterialIcon icon={icon} className={styles.icon} fontSize="1.6rem" />
      )}
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default forwardRef(Item);
