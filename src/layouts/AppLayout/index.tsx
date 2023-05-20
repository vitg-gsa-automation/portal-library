import { ReactElement, useState } from 'react';

import styles from './index.module.scss';
import clsx from 'clsx';
import { Drawer } from '../Drawer';
import { AppLayoutContext } from './context';

interface AppLayoutProps {
  navigation?: ReactElement;
  breadcrumbs?: ReactElement;
  notifications?: ReactElement;
  content?: ReactElement;
  tools?: ReactElement;
  toolsOpen?: boolean;
  navigationOpen?: boolean;
  onToolsChange?: (open: boolean) => void;
  onNavigationChange?: (open: boolean) => void;
  disableBackground?: boolean;
}

export function AppLayout({
  navigation,
  breadcrumbs,
  notifications,
  content,
  tools,
  toolsOpen,
  navigationOpen,
  onToolsChange,
  onNavigationChange,
  disableBackground,
}: AppLayoutProps) {
  const [dynamicOverlapHeight, setDynamicOverlapHeight] = useState(0);
  const isBackgroundDisabled = !content || disableBackground;
  console.log('dynamicOverlapHeight', dynamicOverlapHeight);
  return (
    <AppLayoutContext.Provider
      value={{ dynamicOverlapHeight, setDynamicOverlapHeight }}
    >
      <div className={styles.root}>
        <div
          className={styles.container}
          style={
            {
              '--dynamic-overlap-height': dynamicOverlapHeight + 'px',
            } as React.CSSProperties
          }
        >
          {!isBackgroundDisabled && <div className={styles.background}></div>}
          <div className={styles.navigation}>
            {navigation && (
              <Drawer
                open={navigationOpen}
                onOpenChange={onNavigationChange}
                icon="menu"
              >
                {navigation}
              </Drawer>
            )}
          </div>
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
              <Drawer open={toolsOpen} onOpenChange={onToolsChange} icon="info">
                {tools}
              </Drawer>
            )}
          </div>
        </div>
      </div>
    </AppLayoutContext.Provider>
  );
}
