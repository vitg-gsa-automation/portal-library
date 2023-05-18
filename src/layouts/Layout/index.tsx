import { ReactElement } from 'react';

import styles from './index.module.scss';
import { Outlet } from 'react-router';

interface LayoutProps {
  navigation: ReactElement;
}

export function Layout({ navigation }: LayoutProps) {
  return (
    <div className={styles.root}>
      {navigation}
      <Outlet />
    </div>
  );
}
