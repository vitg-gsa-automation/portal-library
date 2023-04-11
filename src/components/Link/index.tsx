import {
  Link as LinkPrimitive,
  LinkProps as LinkPrimitiveProps,
} from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface LinkProps extends LinkPrimitiveProps {
  size?: 'default' | 'l';
  variant?: 'default' | 'info';
}

export function Link({
  children,
  size = 'default',
  variant = 'default',
  ...props
}: LinkProps) {
  return (
    <LinkPrimitive
      className={clsx(
        styles.root,
        styles[size],
        styles[variant],
        !props.to && styles['button']
      )}
      {...props}
    >
      {children}
    </LinkPrimitive>
  );
}
