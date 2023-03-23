import { ReactElement } from 'react';

import styles from './index.module.scss';

interface LayoutProps {
  navigation?: ReactElement;
  content?: ReactElement;
  tools?: ReactElement;
}

export function Layout({ navigation, content, tools }: LayoutProps) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {navigation}
        <div className={styles.content}>{content}</div>
        {tools}
      </div>
    </div>
  );
}
