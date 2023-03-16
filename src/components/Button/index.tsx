import { clsx } from 'clsx';
import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import { To, useNavigate } from 'react-router';

import { Loader } from '../Loader';
import MaterialIcon from '../MaterialIcon';
import styles from './index.module.scss';

type Color = 'primary' | 'secondary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'large';
  extended?: boolean;
  color?: Color;
  text: string;
  icon?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconPos?: 'left' | 'right';
  loading?: boolean;
  to?: To;
}

function Button(
  {
    loading,
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
  ref: ForwardedRef<HTMLButtonElement>
) {
  const navigate = useNavigate();
  const renderChildren = function () {
    if (loading) {
      return (
        <Loader
          data-testid="loader"
          loaderColor={color === 'primary' ? 'white' : 'primary'}
          size={20}
          speedMultiplier={1.25}
        />
      );
    }
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
      onClick={() => {
        if (to) navigate(to);
      }}
      {...props}
      ref={ref}
      className={clsx(
        styles.root,
        styles[color],
        styles[size],
        extended && styles['extended'],
        className
      )}
    >
      {startIcon}
      {renderChildren()}
      {endIcon}
    </button>
  );
}

export default forwardRef(Button);
