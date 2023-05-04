import React, { ForwardedRef, forwardRef, ReactElement, useState } from 'react';
import { clsx } from 'clsx';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  iconFontSize?: string;
  extended?: boolean;
  invalid?: boolean;
}

export const Input = forwardRef(
  (
    {
      icon,
      iconFontSize = '2rem',
      name,
      className,
      extended,
      invalid,
      style,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div
        style={style}
        className={clsx(styles.root, extended && styles['extended'])}
      >
        <div
          data-testid="input-container"
          className={clsx(
            styles.container,
            {
              [styles.invalid]: invalid,
            },
            className
          )}
        >
          {icon && (
            <MaterialIcon
              className={styles['container__icon']}
              icon={icon}
              fontSize={iconFontSize}
            />
          )}
          <input ref={ref} className={styles.input} id={name} {...props} />
        </div>
      </div>
    );
  }
);

interface InputErrorProps {
  error?: string;
}
export function InputError({ error }: InputErrorProps) {
  if (!error) return null;
  return <span className={styles.error}>{error}</span>;
}

interface InputHintsProps {
  text?: string;
}
export function InputHints({ text }: InputHintsProps) {
  if (!text) return null;
  return <span className={styles.hints}>{text}</span>;
}
