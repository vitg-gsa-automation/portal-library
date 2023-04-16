import { ReactElement } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

interface ContentLayoutProps extends React.HTMLAttributes<HTMLElement> {
  header?: ReactElement;
  disableOverlap?: boolean;
  children: React.ReactNode;
}

export function ContentLayout({
  header,
  children,
  disableOverlap,
  ...props
}: ContentLayoutProps) {
  const isOverlapDisabled = !children || !header || disableOverlap;

  return (
    <main
      className={clsx(styles.root, {
        [styles['is-overlap-disabled']]: isOverlapDisabled,
      })}
      data-cy="page"
      {...props}
    >
      <div
        className={clsx(styles.background, {
          [styles['is-overlap-disabled']]: isOverlapDisabled,
        })}
      ></div>
      <div className={styles.header}>{header}</div>
      <div className={styles.content}>{children}</div>
    </main>
  );
}
