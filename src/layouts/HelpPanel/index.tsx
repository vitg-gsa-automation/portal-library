import { ReactNode } from 'react';

import { MaterialIcon } from '../../components/MaterialIcon';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '../Drawer';
import styles from './index.module.scss';

interface Header {
  href: string;
  text?: string;
}

export interface HelpPanelProps {
  header?: Header;
  content?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaulOpen?: boolean;
}

export function HelpPanel({
  header,
  content,
  open,
  onOpenChange,
  defaulOpen = false,
  ...props
}: HelpPanelProps) {
  return (
    <Drawer modal={false} open={open} onOpenChange={onOpenChange}>
      <DrawerContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        aria-describedby={undefined}
        className={styles.animated}
        forceMount
        asChild
      >
        <aside className={styles.root}>
          <DrawerTrigger className={styles.trigger}>
            <MaterialIcon
              icon="info"
              className={styles['trigger__icon']}
              type="outlined"
              fontSize="2rem"
            />
          </DrawerTrigger>
          <div className={styles['help-panel']}>
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
          </div>
        </aside>
      </DrawerContent>
    </Drawer>
  );
}
