import clsx from 'clsx';
import styles from './index.module.scss';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Sidebar({ children, ...props }: SidebarProps) {
  return <div className={clsx(styles.root, props.className)}>{children}</div>;
}
