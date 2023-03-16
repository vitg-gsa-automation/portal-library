import clsx from 'clsx';
import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function Sidebar({ children, ...props }: Props) {
  return <div className={clsx(styles.root, props.className)}>{children}</div>;
}
export default Sidebar;
