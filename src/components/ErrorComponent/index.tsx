import { ReactNode } from 'react';
import styles from './index.module.scss';

export interface ErrorComponentProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
}

export function ErrorComponent({
  title = 'There was an error when loading the page.',
  description = 'This may be due to a temporary issue with our servers or your network connection.',
  actions,
}: ErrorComponentProps) {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
      <div className={styles.actions}>{actions}</div>
    </div>
  );
}
