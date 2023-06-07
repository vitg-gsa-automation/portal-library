import { ReactNode } from 'react';

import styles from './index.module.scss';
import { StatusType } from '../../types';
import { StatusIndicator } from '../../components/StatusIndicator';

interface StepItemProps {
  text: ReactNode;
  type?: StatusType;
  statusIndicatorText?: string;
  to?: string;
  actions?: ReactNode;
}

export function StepItem({
  text,
  to,
  type = 'success',
  statusIndicatorText = 'OK',
  actions,
}: StepItemProps) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.text}>{text}</div>
        <div className={styles.status}>
          <StatusIndicator type={type}>{statusIndicatorText}</StatusIndicator>
        </div>
      </div>
      <div className={styles.actions}>{actions}</div>
    </div>
  );
}
