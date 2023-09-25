import { ReactNode } from 'react';

import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

export interface FormFieldProps {
  labelId?: any;
  htmlFor?: any;
  label?: string;
  description?: string;
  info?: ReactNode;
  children?: ReactNode;
  error?: string;
  constraintText?: string;
}

type ExtendedProps<T> = T & { invalid?: boolean };

export function FormField({
  labelId,
  htmlFor,
  label,
  description,
  info,
  error,
  constraintText,
  children,
}: FormFieldProps) {
  const isLabelHidden = !label;

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
        {label && (
          <label className={styles.label} htmlFor={htmlFor} id={labelId}>
            {label}
          </label>
        )}
        {info && <span className={styles.info}>{info}</span>}
      </div>
      {description && <div className={styles.description}>{description}</div>}
      <div
        className={clsx(styles.children, {
          [styles['is-label-hidden']]: isLabelHidden,
        })}
      >
        {childrenWithProps}
      </div>
      {error && <div className={styles.error}>{error}</div>}
      {constraintText && (
        <div className={styles.constraint}>{constraintText}</div>
      )}
    </div>
  );
}
