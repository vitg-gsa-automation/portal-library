import { ReactNode } from 'react';

import styles from './index.module.scss';

interface EmptyProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
}

export function Empty({
  title = 'No resources',
  description = 'No resources to display',
  actions,
}: EmptyProps) {
  return (
    <div className={styles.root}>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
