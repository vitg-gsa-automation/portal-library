import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import { To, useNavigate } from 'react-router';

import { Loader } from '../Loader';
import { MaterialIcon } from '../MaterialIcon';
import styles from './index.module.scss';

type Color = 'primary' | 'secondary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
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
  href?: string;
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
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
      href,
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

    if (href) {
      return (
        <a
          ref={forwardedRef as ForwardedRef<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
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
        </a>
      );
    }

    return (
      <button
        ref={forwardedRef as ForwardedRef<HTMLButtonElement>}
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
