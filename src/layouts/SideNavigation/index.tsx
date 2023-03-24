import { ReactElement, ReactNode, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Separator from '@radix-ui/react-separator';
import { NavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.scss';
import { Sidebar } from '../../layouts/Sidebar';
import { MaterialIcon } from '../../components/MaterialIcon';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from '../../layouts/Drawer';

interface Header {
  href: string;
  text?: string;
}

type ItemType = 'link' | 'section';

interface Item {
  id: any;
  type: ItemType;
  text: string;
  items?: Item[];
  icon?: string;
  defaultExpanded?: boolean;
  href?: string;
}

export interface SideNavigationProps {
  header?: Header;
  items?: Item[];
}

export function SideNavigation({
  header,
  items,
  ...props
}: SideNavigationProps) {
  const [open, setOpen] = useState(true);
  const renderItems = function (items?: Item[]) {
    if (!items) return null;
    return items.map((item) => {
      if (item.type === 'link')
        return (
          <Link
            key={item.id}
            icon={item.icon}
            text={item.text}
            to={item.href || '#'}
          />
        );
      else if (item.type === 'section') {
        return (
          <Section
            key={item.text}
            trigger={<ItemComponent text={item.text} icon={item.icon} />}
            value={item.text}
          >
            {renderItems(item.items)}
          </Section>
        );
      }
    });
  };
  return (
    <div className={styles.root}>
      <Drawer modal={false} open={open} onOpenChange={setOpen}>
        {!open && (
          <nav className={styles.closed}>
            <DrawerTrigger className={styles.trigger}>
              <MaterialIcon icon="menu" className={styles['trigger__icon']} />
            </DrawerTrigger>
          </nav>
        )}
        <DrawerContent
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          aria-describedby={undefined}
          className={styles.animated}
          forceMount
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
              <nav className={styles.nav} aria-label="service navigation">
                <Accordion.Root type="multiple">
                  {renderItems(items)}
                </Accordion.Root>
              </nav>
            </div>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

interface LinkProps extends NavLinkProps {
  icon?: string;
  text: string;
}

function Link({ icon, text, ...props }: LinkProps) {
  return (
    <NavLink {...props} className={styles.link}>
      {({ isActive }) => (
        <ItemComponent isActive={isActive} icon={icon} text={text} />
      )}
    </NavLink>
  );
}
interface ItemProps {
  icon?: string;
  text: string;
  isActive?: boolean;
}

function ItemComponent({ icon, text, isActive, ...props }: ItemProps) {
  return (
    <div className={clsx(styles.item, isActive && styles['item--active'])}>
      {icon && (
        <MaterialIcon
          icon={icon}
          className={styles['item__icon']}
          fontSize="2rem"
        />
      )}
      <div className={styles['item__text']}>{text}</div>
    </div>
  );
}
interface SectionProps extends Accordion.AccordionItemProps {
  trigger: ReactElement;
  children?: ReactNode;
}
function Section({ children, trigger, ...props }: SectionProps) {
  return (
    <Accordion.Item {...props}>
      <Accordion.Trigger asChild>
        {
          <button className={styles.toggle}>
            {trigger}
            <MaterialIcon
              icon="expand_more"
              className={styles['toggle__icon']}
              fontSize="2rem"
            />
          </button>
        }
      </Accordion.Trigger>
      <Accordion.Content className={styles['toggle__content']}>
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
}
