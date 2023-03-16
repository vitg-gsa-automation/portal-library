import { ReactNode } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Separator from '@radix-ui/react-separator';
import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.scss';
import Sidebar from 'layouts/Sidebar';
import MaterialIcon from 'components/MaterialIcon';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from 'layouts/Drawer';

export interface ServiceLink {
  text: string;
  to: string;
}

interface Props {}

function MainDrawer({}: Props) {
  const serviceLinks: ServiceLink[] = [
    {
      text: 'Marketplace',
      to: '/portal/oscal-editor',
    },
    {
      text: 'ConMon',
      to: '/portal/oscal-editor',
    },
    {
      text: 'OSCAL Editor',
      to: '/portal/oscal-editor',
    },
  ];

  return (
    <Drawer modal={false} defaultOpen>
      <DrawerTrigger asChild>
        <button className={styles.trigger}>
          <MaterialIcon icon="menu" className={styles['trigger__icon']} />
        </button>
      </DrawerTrigger>
      <DrawerContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        aria-describedby={undefined}
        className={styles.content}
        asChild
      >
        <Sidebar className={styles.root}>
          <div className={styles.heading}>
            <DrawerTitle className={styles.title} asChild>
              <h1>Admin Portal</h1>
            </DrawerTitle>
            <DrawerClose className={styles['heading__close']}>
              <MaterialIcon icon="close" className={styles['heading__icon']} />
            </DrawerClose>
          </div>
          <div className={styles.content}>
            <nav className={styles.nav} aria-label="service navigation">
              <NavLink to="/portal/home">Home</NavLink>
              <NavLink to="/portal/upload">Uploads</NavLink>
              <NavToggle text="Dashboards" value="1">
                <NavLink to="/portal/dashboards/marketplace">
                  Marketplace
                </NavLink>
                {/* <NavLink to="/portal/dashboards/conmon">ConMon</NavLink> */}
                <a
                  href="http://vitgsplunkdev.volpegroup.com:8000/en-US/app/search/awesome_cloud_2022?form.global_time.earliest=-24h%40h&form.global_time.latest=now"
                  target="_blank"
                  rel="noreferrer"
                  className={styles['nav-link']}
                >
                  Monitoring (ConMon)
                </a>
                <NavLink to="/portal/dashboards/grc-tool">GRC Tool</NavLink>
              </NavToggle>

              <Separator.Root asChild>
                <hr className={styles.separator} />
              </Separator.Root>
              <NavLink to="/portal/registrations">Registrations</NavLink>
              {/* <NavToggle text="Organizations" value="1">
                <NavLink to="/portal/organizations" end>
                  Organizations
                </NavLink>
                <NavLink to="/portal/organizations/maintenance">
                  Maintenance
                </NavLink>
              </NavToggle>
              <NavToggle text="Systems" value="1">
                <NavLink to="/portal/systems" end>
                  Systems
                </NavLink>
                <NavLink to="/portal/systems/maintenance">Maintenance</NavLink>
              </NavToggle>
              <NavToggle text="ATO Packages" value="1">
                <NavLink to="/portal/packages" end>
                  Packages
                </NavLink>
              </NavToggle>
              <NavToggle text="Users" value="1">
                <NavLink to="/portal/users" end>
                  Users
                </NavLink>
              </NavToggle> */}
              <NavLink to="/portal/organizations">Organizations</NavLink>
              <NavLink to="/portal/systems">Systems</NavLink>
              <NavLink to="/portal/packages">ATO Packages</NavLink>
              <NavLink to="/portal/users">Users</NavLink>
            </nav>
          </div>
        </Sidebar>
      </DrawerContent>
    </Drawer>
  );
}

function NavLink({ children, ...props }: NavLinkProps) {
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

interface NavToggleProps extends Accordion.AccordionItemProps {
  children?: ReactNode;
  text: string;
}

function NavToggle({ text, children, ...props }: NavToggleProps) {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item className={styles['nav-toggle']} {...props}>
        <Accordion.Trigger asChild>
          <button className={styles['nav-toggle__trigger']}>
            <MaterialIcon
              icon="play_arrow"
              className={styles['nav-toggle__trigger__icon']}
              fontSize="2rem"
              type="round"
            />
            {text}
          </button>
        </Accordion.Trigger>
        <Accordion.Content className={styles['nav-toggle__content']}>
          {children}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default MainDrawer;
