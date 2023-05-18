import * as Accordion from '@radix-ui/react-accordion';
import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import { NavLinkProps, NavLink as RouterNavLink } from 'react-router-dom';

import { MaterialIcon } from '../../components/MaterialIcon';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '../../layouts/Drawer';
import styles from './index.module.scss';

interface Header {
  href: string;
  text?: string;
}

type ItemType = 'link' | 'section' | 'divider';

interface Item {
  id: any;
  type: ItemType;
  text?: string;
  items?: Item[];
  icon?: string;
  defaultExpanded?: boolean;
  href?: string;
}

export interface SideNavigationProps {
  header?: Header;
  items?: Item[];
  defaultOpen?: boolean;
}

export function SideNavigation({
  header,
  items,
  defaultOpen = true,
  ...props
}: SideNavigationProps) {
  const [open, setOpen] = useState(defaultOpen);
  const renderItems = function (items?: Item[]) {
    if (!items) return null;
    return items.map((item) => {
      if (item.type === 'link')
        return (
          <li key={item.id} className={styles.item}>
            <SideNavigationLink key={item.id} to={item.href || '#'}>
              {item.text}
            </SideNavigationLink>
          </li>
        );
      else if (item.type === 'section') {
        return (
          <li key={item.id} className={styles.item}>
            <Expandable text={item.text} value={item.id}>
              {renderItems(item.items)}
            </Expandable>
          </li>
        );
      } else if (item.type === 'divider') {
        return (
          <Separator.Root key={item.id} asChild>
            <hr className={styles.separator} />
          </Separator.Root>
        );
      }
    });
  };
  return (
    <Drawer modal={false} open={open} onOpenChange={setOpen}>
      {!open && (
        <nav className={styles.closed}>
          <DrawerTrigger className={styles.trigger}>
            <MaterialIcon
              icon="menu"
              className={styles['trigger__icon']}
              fontSize="2rem"
            />
          </DrawerTrigger>
        </nav>
      )}
      <DrawerContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        aria-describedby={undefined}
        className={styles.animated}
        forceMount
        asChild
      >
        <nav className={styles.content}>
          {header && (
            <div className={styles.header}>
              <DrawerTitle className={styles.title} asChild>
                <h1>{header.text}</h1>
              </DrawerTitle>
              <DrawerClose className={styles['header__close']}>
                <MaterialIcon
                  icon="chevron_left"
                  className={styles['header__icon']}
                />
              </DrawerClose>
            </div>
          )}
          <div>
            <div className={styles.nav} aria-label="service navigation">
              <Accordion.Root type="multiple">
                <ul className={styles.list}>{renderItems(items)}</ul>
              </Accordion.Root>
            </div>
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}

interface ExpandableProps extends Accordion.AccordionItemProps {
  children?: ReactNode;
  text?: string;
}
function Expandable({ text, children, ...props }: ExpandableProps) {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item className={styles.expandable} {...props}>
        <Accordion.Trigger asChild>
          <button className={styles['expandable__trigger']}>
            <MaterialIcon
              icon="play_arrow"
              className={styles['expandable__trigger__icon']}
              fontSize="2rem"
              type="round"
            />
            {text}
          </button>
        </Accordion.Trigger>
        <Accordion.Content className={styles['expandable__content']}>
          <ul className={styles['expandable__list']}>{children}</ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

interface SideNavigationLinkProps extends NavLinkProps {
  external?: boolean;
}
function SideNavigationLink({ children, ...props }: SideNavigationLinkProps) {
  return (
    <RouterNavLink
      className={({ isActive }) =>
        clsx(styles['nav-link'], isActive && styles['nav-link--active'])
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  );
}
