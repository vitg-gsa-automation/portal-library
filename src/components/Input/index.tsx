import React, { ForwardedRef, forwardRef, ReactElement, useState } from 'react';
import { clsx } from 'clsx';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  iconFontSize?: string;
  extended?: boolean;
  hints?: string;
  error?: string;
}

export const Input = forwardRef(
  (
    {
      icon,
      iconFontSize = '2rem',
      name,
      className,
      extended,
      hints,
      error,
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
          className={clsx(
            styles.container,
            error && styles['container--error'],
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
        {hints && <InputHints text={hints} />}
        {error && <InputError error={error} />}
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

interface InputSearchHelpers {
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface InputSearchProps {
  onSearch: (search: string) => any;
  children: (helpers: InputSearchHelpers) => ReactElement;
}

export function InputSearch({ onSearch, children }: InputSearchProps) {
  const [search, setSearch] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setSearch('');
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(search);
      }}
    >
      {children({ search, handleChange, handleKeyDown })}
    </form>
  );
}
