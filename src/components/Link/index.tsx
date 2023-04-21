import {
  Link as LinkPrimitive,
  LinkProps as LinkPrimitiveProps,
} from 'react-router-dom';
import clsx from 'clsx';

import styles from './index.module.scss';
import { ReactNode } from 'react';
import { MaterialIcon } from '../../components/MaterialIcon';

type BaseLinkProps = {
  size?: 'sm' | 'l';
  variant?: 'default' | 'info';
  children?: ReactNode;
};

type ExternalLinkProps = {
  external: true;
  href: string;
} & BaseLinkProps;

type InternalLinkProps = {
  external?: false;
  to: string;
} & BaseLinkProps &
  LinkPrimitiveProps;

export type LinkProps = InternalLinkProps | ExternalLinkProps;

export function Link({
  children,
  size = 'sm',
  variant = 'default',
  external = false,
  ...props
}: LinkProps) {
  const classNames = clsx(
    styles.root,
    styles[size],
    styles[variant],
    !('to' in props) && styles['button'],
    styles.external
  );

  if (external) {
    const { href, ...rest } = props as ExternalLinkProps;
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children} <MaterialIcon icon="open_in_new" className={styles.icon} />
      </a>
    );
  }

  const { to, ...rest } = props as InternalLinkProps;
  return (
    <LinkPrimitive className={classNames} to={to} {...rest}>
      {children}
    </LinkPrimitive>
  );
}
