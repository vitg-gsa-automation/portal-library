import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import { To, useNavigate } from 'react-router';

import { Loader } from '../Loader';
import { MaterialIcon } from '../MaterialIcon';
import styles from './index.module.scss';

type Color = 'primary' | 'secondary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'normal' | 'link';
  size?: 'small' | 'large';
  extended?: boolean;
  color?: Color;
  icon?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconPos?: 'left' | 'right';
  loading?: boolean;
  to?: To;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      loading,
      variant = 'normal',
      size = 'small',
      icon,
      iconPos = 'left',
      startIcon,
      endIcon,
      text,
      extended,
      color = 'primary',
      className,
      to,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const navigate = useNavigate();
    const renderChildren = function () {
      return (
        <React.Fragment>
          {icon && iconPos === 'left' ? (
            <MaterialIcon icon={icon} fontSize="1.6rem" type="outlined" />
          ) : null}
          <span className={styles['root__text']}>{text}</span>
          {icon && iconPos === 'right' ? (
            <MaterialIcon icon={icon} fontSize="1.6rem" type="outlined" />
          ) : null}
        </React.Fragment>
      );
    };

    return (
      <button
        ref={forwardedRef}
        onClick={() => {
          if (to) navigate(to);
        }}
        {...props}
        className={clsx(
          styles.root,
          styles[color],
          styles[size],
          styles[variant],
          {
            [styles['extended']]: extended,
            [styles['loading']]: loading,
          },
          className
        )}
      >
        {startIcon}
        {loading && (
          <Loader
            data-testid="loader"
            loaderColor={color === 'primary' ? 'white' : 'primary'}
            size={14}
            borderWidth={2}
          />
        )}
        {renderChildren()}
        {endIcon}
      </button>
    );
  }
);
