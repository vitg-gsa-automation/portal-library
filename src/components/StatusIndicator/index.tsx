import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';
import { Loader } from '../Loader';
type StatusIndicatorType =
  | 'info'
  | 'warning'
  | 'success'
  | 'error'
  | 'pending'
  | 'in-progress'
  | 'loading';

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  type?: StatusIndicatorType;
  children: ReactNode;
}

const getIcon = function (type: StatusIndicatorType) {
  switch (type) {
    case 'info':
      return 'info';
    case 'warning':
      return 'report_problem';
    case 'success':
      return 'check_circle';
    case 'error':
      return 'error_outline';
    case 'pending':
      return 'schedule';
    case 'in-progress':
      return 'pending';
  }
};

export function StatusIndicator({
  type = 'info',
  children,
  ...props
}: StatusIndicatorProps) {
  const icon = getIcon(type);
  return (
    <span className={clsx(styles.root, styles[type])} {...props}>
      {type === 'loading' && <Loader size={14} borderWidth={2} />}
      {icon && (
        <MaterialIcon
          className={styles.icon}
          icon={icon}
          type="outlined"
          fontSize="1.6rem"
        />
      )}
      <span className={styles.text}>{children}</span>
    </span>
  );
}
