import { ReactElement } from 'react';
import styles from './index.module.scss';

interface ContentLayoutProps extends React.HTMLAttributes<HTMLElement> {
  header?: ReactElement;
  children: React.ReactNode;
}

export function ContentLayout({ header, children, ...props }: ContentLayoutProps) {
  return (
    <main className={styles.root} data-cy="page" {...props}>
      {header}
      {children}
    </main>
  );
}
