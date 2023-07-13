import { ReactNode } from 'react';
import { Link } from '../../components/Link';
import { Container } from '../../layouts/Container';
import styles from './index.module.scss';

export interface NoMatchProps {
  actions: ReactNode;
}

export function NoMatch({ actions }: NoMatchProps) {
  return (
    <div className={styles.root}>
      <h1>404 Error</h1>
      <h2>Page not found</h2>
      <div>{actions}</div>
    </div>
  );
}
