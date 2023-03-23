import { ReactElement } from 'react';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';
import { Input } from '../Input';
import { Link } from '../Link';

interface TopNavigationProps {
  title?: string;
  userToggle?: ReactElement;
  children?: React.ReactNode;
}

export function TopNavigation({
  userToggle,
  title,
  children,
}: TopNavigationProps) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Link to="/dashboard" className={styles.logo}>
          <img src={'logo'} alt="logo" className={styles['logo__image']} />
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
        <MaterialIcon
          className={styles.icon}
          icon="notifications"
          type="outlined"
          fontSize="2rem"
        />
        {userToggle}
      </div>
    </div>
  );
}
