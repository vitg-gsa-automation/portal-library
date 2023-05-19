import { ReactNode } from 'react';

import { MaterialIcon } from '../../components/MaterialIcon';
import { DrawerClose, DrawerTitle } from '../Drawer';
import styles from './index.module.scss';

interface Header {
  href: string;
  text?: string;
}

export interface HelpPanelProps {
  header?: Header;
  content?: ReactNode;
}

export function HelpPanel({ header, content }: HelpPanelProps) {
  return (
    <aside className={styles['help-panel']}>
      {header && (
        <div className={styles.header}>
          <DrawerTitle className={styles.title} asChild>
            <h1>{header.text}</h1>
          </DrawerTitle>
          <DrawerClose className={styles['header__close']}>
            <MaterialIcon
              icon="chevron_right"
              className={styles['header__icon']}
            />
          </DrawerClose>
        </div>
      )}
      <div className={styles.content}>{content}</div>
    </aside>
  );
}
