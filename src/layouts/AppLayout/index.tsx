import { ReactElement } from 'react';

import styles from './index.module.scss';
import clsx from 'clsx';
import { Drawer } from '../Drawer';

interface AppLayoutProps {
  navigation?: ReactElement;
  breadcrumbs?: ReactElement;
  notifications?: ReactElement;
  content?: ReactElement;
  tools?: ReactElement;
  toolsOpen?: boolean;
  onToolsChange?: (open: boolean) => void;
  disableBackground?: boolean;
}

export function AppLayout({
  navigation,
  breadcrumbs,
  notifications,
  content,
  tools,
  toolsOpen,
  onToolsChange,
  disableBackground,
}: AppLayoutProps) {
  const isBackgroundDisabled = !content || disableBackground;
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {!isBackgroundDisabled && <div className={styles.background}></div>}
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
        <div className={styles.tools}>
          {tools && (
            <Drawer open={toolsOpen} onOpenChange={onToolsChange}>
              {tools}
            </Drawer>
          )}
        </div>
      </div>
    </div>
  );
}
