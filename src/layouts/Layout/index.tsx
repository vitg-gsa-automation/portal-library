import { ReactElement } from 'react';

import styles from './index.module.scss';

interface LayoutProps {
  navigation?: ReactElement;
  breadcrumbs?: ReactElement;
  notifications?: ReactElement;
  content?: ReactElement;
  tools?: ReactElement;
}

export function Layout({
  navigation,
  breadcrumbs,
  notifications,
  content,
  tools,
}: LayoutProps) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles['background__top']}></div>
          <div className={styles['background__bottom']}></div>
        </div>
        <div className={styles.navigation}>{navigation}</div>
        <div className={styles.notifications}>{notifications}</div>
        <div className={styles.breadcrumbs}>{breadcrumbs}</div>
        <div className={styles.content}>{content}</div>
        <div className={styles.tools}>{tools}</div>
      </div>
    </div>
  );
}
