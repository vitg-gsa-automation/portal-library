import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Viewport as ToastViewport } from '@radix-ui/react-toast';

import styles from './index.module.scss';

interface Props {
  navbar?: ReactElement;
  sidebar?: ReactElement;
  footer?: ReactElement;
}

function Layout({ navbar, sidebar, footer }: Props) {
  return (
    <div className={styles.root}>
      {navbar}
      <div className={styles.container}>
        {sidebar}
        <div className={styles.content}>
          <ToastViewport />
          <Outlet />
        </div>
      </div>
      {footer}
    </div>
  );
}
export default Layout;
