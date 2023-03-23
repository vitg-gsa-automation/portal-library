import { ReactElement } from 'react';
import styles from './index.module.scss';

interface PageProps extends React.HTMLAttributes<HTMLElement> {
  header?: ReactElement;
  children: React.ReactNode;
}

export function Page({ header, children, ...props }: PageProps) {
  return (
    <main className={styles.root} data-cy="page" {...props}>
      {header}
      {children}
    </main>
  );
}
