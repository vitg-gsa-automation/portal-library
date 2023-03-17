import styles from './index.module.scss';

interface PageProps {
  children: React.ReactNode;
}

export function Page({ children }: PageProps) {
  return <main className={styles.root}>{children}</main>;
}
