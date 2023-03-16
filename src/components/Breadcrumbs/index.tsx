import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.scss';
import useBreadcrumbs, { BreadcrumbsRoute } from 'use-react-router-breadcrumbs';
import MaterialIcon from '../MaterialIcon';

interface Props {
  routes?: BreadcrumbsRoute[];
  excludePaths?: string[];
}

function Breadcrumbs({ routes, excludePaths = [] }: Props) {
  const breadcrumbs = useBreadcrumbs(routes, {
    excludePaths: ['/', '/portal', ...excludePaths],
  });
  const renderCrumbs = function () {
    if (!breadcrumbs) return null;
    return breadcrumbs.map((crumb, index) => {
      const isLast = index === breadcrumbs.length - 1;
      return (
        <span className={styles.crumb} key={crumb.key}>
          <NavLink
            end
            to={crumb.match.pathname}
            className={({ isActive }) =>
              clsx(styles.link, isActive && styles['link--active'])
            }
          >
            {crumb.breadcrumb}
          </NavLink>
          {!isLast ? (
            <MaterialIcon
              icon="chevron_right"
              className={styles.icon}
              fontSize="2.4rem"
            />
          ) : null}
        </span>
      );
    });
  };

  return <nav className={styles.root}>{renderCrumbs()}</nav>;
}

export default Breadcrumbs;
