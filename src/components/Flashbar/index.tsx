import { ReactNode, useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';
import { Loader } from '../../components/Loader';
import { Notification } from '../../types';

type FlashbarType = 'info' | 'warning' | 'success' | 'error';

export interface FlashbarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Notification[];
}

const getIcon = function (type: FlashbarType) {
  switch (type) {
    case 'info':
      return 'info';
    case 'warning':
      return 'report_problem';
    case 'success':
      return 'check_circle';
    case 'error':
      return 'error_outline';

    default:
      return 'info';
  }
};

export function Flashbar({ items, ...props }: FlashbarProps) {
  const renderItems = function () {
    return items.map(
      (
        { type, header, content, action, dismissable, loading, onDismiss, id },
        index
      ) => {
        const icon = getIcon(type);

        return (
          <div key={id} className={clsx(styles.flash, styles[type])} {...props}>
            <div className={styles.icon}>
              {loading ? (
                <Loader loaderColor="white" size={15} borderWidth={2} />
              ) : (
                <MaterialIcon icon={icon} fontSize="1.8rem" type="outlined" />
              )}
            </div>
            <div className={styles.container}>
              {header && <div className={styles.header}>{header}</div>}
              {content}
            </div>
            <div className={styles.action}>{action}</div>
            {dismissable && (
              <MaterialIcon
                icon="close"
                className={styles.close}
                fontSize="2rem"
                onClick={() => onDismiss(index)}
              />
            )}
          </div>
        );
      }
    );
  };
  return <div className={styles.root}>{renderItems()}</div>;
}
