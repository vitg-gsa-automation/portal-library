import { ReactElement, ReactNode } from 'react';
import styles from './index.module.scss';
interface PageHeaderProps {
  breadcrumbs?: ReactElement;
  children: ReactNode;
}

export function PageHeader({ breadcrumbs, children }: PageHeaderProps) {
  return (
    <div className={styles.root}>
      {breadcrumbs}
      {children}
    </div>
  );
}
