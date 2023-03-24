import { ReactElement, ReactNode, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Separator from '@radix-ui/react-separator';
import { NavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.scss';
import { MaterialIcon } from '../../components/MaterialIcon';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from '../Drawer';

interface Header {
  href: string;
  text?: string;
}

export interface HelpPanelProps {
  header?: Header;
  content?: ReactNode;
}

export function HelpPanel({ header, content, ...props }: HelpPanelProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.root}>
      <Drawer modal={false} open={open} onOpenChange={setOpen}>
        {!open && (
          <div className={styles.closed}>
            <DrawerTrigger className={styles.trigger}>
              <MaterialIcon icon="info" className={styles['trigger__icon']} />
            </DrawerTrigger>
          </div>
        )}
        <DrawerContent
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          aria-describedby={undefined}
          className={styles.animated}
          forceMount
        >
          <div className={styles.content}>
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
            <div>{content}</div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
