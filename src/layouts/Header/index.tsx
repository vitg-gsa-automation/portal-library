import { ReactNode } from 'react';

import styles from './index.module.scss';
import clsx from 'clsx';

type HeaderVariant = 'h1' | 'h2' | 'h3';

export interface HeaderProps {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  count?: string;
  info?: ReactNode;
  variant?: HeaderVariant;
}

interface HeaderDetailProps {
  label: string;
  value: ReactNode;
}

export function Header({
  title,
  description,
  actions,
  count,
  info,
  variant = 'h1',
  ...props
}: HeaderProps) {
  const HeadingTag = variant;

  return (
    <div className={styles.root} {...props}>
      <div className={styles.box}>
        <div className={styles.title}>
          <HeadingTag
            className={clsx(styles.text, styles[variant])}
            data-cy="header-title"
          >
            <span>{title}</span>
            {count && <span className={styles.count}> {count}</span>}
          </HeadingTag>
          <div className={styles.info}>{info}</div>
        </div>
        {description && (
          <div
            className={clsx(
              styles.description,
              styles[`description-${variant}`]
            )}
          >
            {description}
          </div>
        )}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}

export function HeaderDetail({ label, value, ...props }: HeaderDetailProps) {
  return (
    <div className={styles['header-detail']} {...props}>
      <label className={styles['header-detail__label']}>{`${label}:`}</label>
      {value}
    </div>
  );
}
