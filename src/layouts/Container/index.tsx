import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: any;
}
function Container({ children, ...props }: Props) {
  return (
    <div className={styles.root} {...props}>
      {children}
    </div>
  );
}

export default Container;
