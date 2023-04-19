import { ReactNode } from 'react';

import styles from './index.module.scss';

export interface InputGroupProps {
  htmlFor?: string;
  label: string;
  info?: ReactNode;
  hint?: string;
  children?: ReactNode;
}

export function InputGroup({
  htmlFor,
  label,
  info,
  hint,
  children,
}: InputGroupProps) {
  return (
    <div className={styles.root}>
      <div>
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
        </label>
        {info && <span className={styles.info}>{info}</span>}
      </div>
      {hint && <div className={styles.hint}>{hint}</div>}
      <div className={styles.children}>{children}</div>
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
