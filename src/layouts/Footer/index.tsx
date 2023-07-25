import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { MaterialIcon } from '../../components/MaterialIcon';

type BaseLink = {
  id: any;
  text: string;
};

type InternalLink = {
  external: false;
  to: string;
} & BaseLink;

type ExternalLink = {
  external: true;
  href: string;
} & BaseLink;

type FooterItem = InternalLink | ExternalLink;

interface FooterProps {
  appName: string;
  version: string;
  buildDate: string;
  items?: ReadonlyArray<FooterItem>;
}

export function Footer({ appName, items, version, buildDate }: FooterProps) {
  const internalVersion = version || '0.0.0';
  const renderItems = function () {
    return items?.map((item) => {
      if (item.external) {
        return (
          <li key={item.id}>
            <a
              href={item.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
              {item.external && (
                <MaterialIcon
                  icon="open_in_new"
                  className={styles.external}
                  fontSize="2rem"
                />
              )}
            </a>
          </li>
        );
      }
      return (
        <li key={item.id}>
          <Link to={item.to} className={styles.link}>
            {item.text}
          </Link>
        </li>
      );
    });
  };
  return (
    <footer className={styles.root}>
      <div className={styles.content}>
        <ul className={styles.list}>{renderItems()}</ul>
        {appName} | Version: {internalVersion} | Last Built: {buildDate}
      </div>
    </footer>
  );
}
