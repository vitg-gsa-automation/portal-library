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
      return 'error';

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
  ...props
}: AlertProps) {
  const [open, setOpen] = useState(true);
  const icon = getIcon(type);
  if (!open) return null;
  return (
    <div className={clsx(styles.root, styles[type])} {...props}>
      <MaterialIcon icon={icon} className={styles.icon} fontSize="1.8rem" />
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
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
