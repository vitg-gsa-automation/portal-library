import styles from './index.module.scss';

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {}

export function Form({ children, ...props }: FormProps) {
  return (
    <form {...props} className={styles.root}>
      {children}
    </form>
  );
}
