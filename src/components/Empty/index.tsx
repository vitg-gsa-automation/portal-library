import { ReactNode } from 'react';

import styles from './index.module.scss';

interface Props {
  icon?: ReactNode;
  main: string;
  text?: string;
  children?: ReactNode;
}

function Empty({ icon, main, text, children }: Props) {
  return (
    <div className={styles.root}>
      {icon}
      <span className={styles.main}>{main}</span>
      {text && <span className={styles.text}>{text}</span>}
      {children && <div className={styles.actions}>{children}</div>}
    </div>
  );
}
export default Empty;
