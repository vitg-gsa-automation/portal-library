import { ReactNode } from 'react';

import React from 'react';
import styles from './index.module.scss';

export interface FormFieldProps {
  htmlFor?: any;
  label: string;
  description?: string;
  info?: ReactNode;
  children?: ReactNode;
  error?: string;
  constraintText?: string;
}

type ExtendedProps<T> = T & { invalid?: boolean };

export function FormField({
  htmlFor,
  label,
  description,
  info,
  error,
  constraintText,
  children,
}: FormFieldProps) {
  const childrenWithProps = React.Children.map(children, (child: ReactNode) => {
    if (React.isValidElement(child)) {
      const extendedProps: ExtendedProps<typeof child.props> = {
        ...child.props,
        invalid: Boolean(error),
      };

      return React.cloneElement(child, extendedProps);
    }
    return child;
  });
  return (
    <div className={styles.root}>
      <div>
        <label className={styles.label} htmlFor={htmlFor}>
          {label}
        </label>
        {info && <span className={styles.info}>{info}</span>}
      </div>
      {description && <div className={styles.description}>{description}</div>}
      <div className={styles.children}>{childrenWithProps}</div>
      {error && <div className={styles.error}>{error}</div>}
      {constraintText && (
        <div className={styles.constraint}>{constraintText}</div>
      )}
    </div>
  );
}
