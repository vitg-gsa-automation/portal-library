import { ReactNode } from 'react';

import styles from './index.module.scss';

export interface InputGroupProps {
  label: string;
  hint?: string;
  htmlFor?: string;
  children?: ReactNode;
}

export function InputGroup({
  label,
  hint,
  htmlFor,
  children,
}: InputGroupProps) {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      {hint && <div className={styles.hint}>{hint}</div>}
      {children}
    </div>
  );
}

interface InputGroupErrorProps {
  error?: string;
}

export function InputGroupError({ error }: InputGroupErrorProps) {
  if (!error) return null;
  return <div className={styles.error}>{error}</div>;
}
