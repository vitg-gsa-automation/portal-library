import { ReactElement } from 'react';

import styles from './index.module.scss';

interface DashboardProps {
  topNavigation?: ReactElement;
  footer?: ReactElement;
  children?: ReactElement;
}

export function Dashboard({ topNavigation, footer, children }: DashboardProps) {
  return (
    <div className={styles.root}>
      {topNavigation}
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
      {footer}
    </div>
  );
}
