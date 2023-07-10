import { ReactNode, useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';

type AlertType = 'info' | 'warning' | 'success' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: AlertType;
  header: ReactNode;
  content?: ReactNode;
  action?: ReactNode;
  dismissable?: boolean;
  onDismiss?: () => any;
}

const getIcon = function (type: AlertType) {
  switch (type) {
    case 'info':
      return 'info';
    case 'warning':
      return 'report_problem';
    case 'success':
      return 'check_circle';
    case 'error':
      return 'highlight_off';

    default:
      return 'info';
  }
};

export function Alert({
  type = 'info',
  header,
  content,
  action,
  dismissable,
  onDismiss,
  ...props
}: AlertProps) {
  const icon = getIcon(type);
  return (
    <div className={clsx(styles.root, styles[type])} {...props}>
      <MaterialIcon
        icon={icon}
        className={styles.icon}
        fontSize="1.8rem"
        type="outlined"
      />
      <div className={styles.container}>
        <div className={styles.header}>{header}</div>
        {content}
      </div>
      <div className={styles.action}>{action}</div>
      {dismissable && (
        <MaterialIcon
          icon="close"
          className={styles.close}
          fontSize="2rem"
          onClick={onDismiss}
        />
      )}
    </div>
  );
}
