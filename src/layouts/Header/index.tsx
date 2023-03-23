import { ReactNode } from 'react';

import styles from './index.module.scss';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: ReactNode;
  actions?: ReactNode;
  status?: ReactNode;
}

interface HeaderDetailProps {
  label: string;
  value: ReactNode;
}

export function Header({ title, description, actions, status }: HeaderProps) {
  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <div className={styles.title}>
          <h1 className={styles.text} data-cy="header-title">
            {title}
          </h1>
          {status}
        </div>
        {description && <p className={styles.description}>{description}</p>}
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
