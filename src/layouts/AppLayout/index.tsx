import { ReactElement } from 'react';

import styles from './index.module.scss';
import clsx from 'clsx';

interface AppLayoutProps {
  navigation?: ReactElement;
  breadcrumbs?: ReactElement;
  notifications?: ReactElement;
  content?: ReactElement;
  tools?: ReactElement;
}

export function AppLayout({
  navigation,
  breadcrumbs,
  notifications,
  content,
  tools,
}: AppLayoutProps) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {/* <div className={styles.background}></div> */}
        <div className={styles.navigation}>{navigation}</div>
        <div className={styles.notifications}>{notifications}</div>
        <div
          className={clsx(
            styles.breadcrumbs,
            notifications && styles['has-notifications']
          )}
        >
          {breadcrumbs}
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.tools}>{tools}</div>
      </div>
    </div>
  );
}
