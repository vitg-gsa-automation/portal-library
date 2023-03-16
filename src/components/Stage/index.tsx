import { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import MaterialIcon from 'components/MaterialIcon';

type StageStatus = 'default' | 'error' | 'success';

interface StageProps {
  status?: StageStatus;
  text: string;
  children?: ReactNode[];
  loading?: boolean;
  showToggle?: boolean;
}
export const Stage = forwardRef<HTMLButtonElement, StageProps>(
  (
    {
      loading = false,
      children,
      text,
      status = 'default',
      showToggle,
      ...props
    },
    forwardedRef
  ) => {
    const getIcon = function () {
      switch (status) {
        case 'error':
          return 'error';
        case 'success':
          return 'check_circle';
        default:
          return 'radio_button_unchecked';
      }
    };
    return (
      <button
        ref={forwardedRef}
        className={clsx(styles.root, styles[status])}
        {...props}
      >
        <MaterialIcon
          icon={getIcon()}
          className={styles.icon}
          fontSize="1.6rem"
        />
        <p className={styles.text}>{text}</p>
        {showToggle && (
          <MaterialIcon
            icon="expand_more"
            className={styles.toggle}
            fontSize="1.8rem"
          />
        )}
      </button>
    );
  }
);
