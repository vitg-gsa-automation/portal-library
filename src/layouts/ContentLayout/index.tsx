import { ReactElement, useRef } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useDynamicOverlap } from '../../hooks/useDynamicOverlap';

interface ContentLayoutProps extends React.HTMLAttributes<HTMLElement> {
  header?: ReactElement;
  disableOverlap?: boolean;
  disableBackground?: boolean;
  children: React.ReactNode;
}

export function ContentLayout({
  header,
  children,
  disableOverlap,
  disableBackground,
  ...props
}: ContentLayoutProps) {
  const overlapElementRef = useDynamicOverlap<HTMLDivElement>();
  const isOverlapDisabled = !children || !header || disableOverlap;
  const isBackgroundDisabled = disableBackground;

  return (
    <main
      className={clsx(styles.root, {
        [styles['is-overlap-disabled']]: isOverlapDisabled,
      })}
      data-cy="page"
      {...props}
    >
      <div
        ref={overlapElementRef}
        className={clsx(styles.background, {
          [styles['is-overlap-disabled']]: isOverlapDisabled,
          [styles['is-background-disabled']]: isBackgroundDisabled,
        })}
      ></div>
      <div
        className={clsx(styles.header, {
          [styles['is-background-enabled']]: !isBackgroundDisabled,
        })}
      >
        {header}
      </div>
      <div className={styles.content}>{children}</div>
    </main>
  );
}
