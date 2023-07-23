import { ReactElement } from 'react';

import styles from './index.module.scss';
import { Outlet } from 'react-router';

interface LayoutProps {
  navigation: ReactElement;
  footer?: ReactElement;
}

export function Layout({ navigation, footer }: LayoutProps) {
  return (
    <div className={styles.root}>
      {navigation}
      <Outlet />
      {footer}
    </div>
  );
}
