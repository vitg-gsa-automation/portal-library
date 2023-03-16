import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

function Page({ children }: Props) {
  return <main className={styles.root}>{children}</main>;
}
export default Page;
