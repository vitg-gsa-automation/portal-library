import styles from './index.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: any;
}
export function Container({ children, ...props }: ContainerProps) {
  return (
    <div className={styles.root} {...props}>
      {children}
    </div>
  );
}
