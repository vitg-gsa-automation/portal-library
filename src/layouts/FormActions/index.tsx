import styles from './index.module.scss';

interface FormActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FormActions({ children, ...props }: FormActionsProps) {
  return (
    <div className={styles.root} {...props}>
      {children}
    </div>
  );
}
