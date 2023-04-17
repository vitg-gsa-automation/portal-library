import { ReactElement, useRef } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useSize } from '../../hooks/useSize';

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
  const [size, overlapElement] = useSize<HTMLDivElement>();
  console.log(size?.height);
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
        ref={overlapElement}
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
