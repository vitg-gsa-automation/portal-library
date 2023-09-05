import { ReactElement } from 'react';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';
import { Input } from '../Input';
import { Link } from '../Link';
import { MenuDropdownUtility } from './interfaces';
import { UtilityComponent } from './utility';

export interface TopNavigationProps {
  logo: string;
  href: string;
  title?: string;
  userToggle?: ReactElement;
  children?: React.ReactNode;
  menuDropdownUtility?: MenuDropdownUtility;
}

export function TopNavigation({
  href,
  userToggle,
  title,
  logo,
  menuDropdownUtility,
  children,
}: TopNavigationProps) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Link to={href} className={styles.logo}>
          <img src={logo} alt="logo" className={styles['logo__image']} />
        </Link>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.search}>
        <Input
          icon="search"
          className={styles['search__input']}
          placeholder="Search for packages, docs, and more"
        />
      </div>
      <div className={styles.right}>
        {children}
        {/* <MaterialIcon
          className={styles.icon}
          icon="notifications"
          type="outlined"
          fontSize="2rem"
        /> */}
        {/* //toggle */}
        {userToggle}
        {menuDropdownUtility && (
          <UtilityComponent utility={menuDropdownUtility} />
        )}
      </div>
    </div>
  );
}
