import { ReactElement, ReactNode } from 'react';

import styles from './index.module.scss';
import clsx from 'clsx';
import { StatusIndicator } from '../../components/StatusIndicator';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'embedded';
  header?: ReactNode;
  footer?: ReactNode;
  loading?: boolean;
  loadingText?: string;
  children?: React.ReactNode;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  text?: string;
  actions?: ReactNode;
  tools?: ReactNode;
}

interface CardTitleProps {
  count?: ReactNode;
  text: string;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  disableTopPadding?: boolean;
  children: React.ReactNode;
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
interface CardStatProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value?: ReactNode;
}

interface CardStatValueProps {
  children: ReactNode;
}

export function Card({
  variant = 'default',
  className,
  header,
  footer,
  loading,
  loadingText = 'Loading resources',
  children,
  ...props
}: CardProps) {
  return (
    <div className={clsx(styles.root, styles[variant])} {...props}>
      {header && <div className={styles.header}>{header}</div>}
      {loading ? (
        <div className={styles.loading}>
          <StatusIndicator type="loading">{loadingText}</StatusIndicator>
        </div>
      ) : (
        children
      )}
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

export function CardHeader({
  text,
  actions,
  tools,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div className={styles.header} {...props}>
      <div className={styles['header__container']}>
        <div className={styles['header__content']}>
          {children}
          {text && <p className={styles['header__text']}>{text}</p>}
        </div>
        {actions && <div className={styles['header__actions']}>{actions}</div>}
      </div>
      {tools && <div className={styles['header__tools']}>{tools}</div>}
    </div>
  );
}

interface CardHeaderToolsProps {
  children?: ReactNode;
  searchInput: ReactElement;
}
export function CardHeaderTools({
  children,
  searchInput,
  ...props
}: CardHeaderToolsProps) {
  return (
    <div className={styles.tools} {...props}>
      <div className={styles['tools__search']}>{searchInput}</div>
      {children}
    </div>
  );
}

export function CardTitle({ count, text, ...props }: CardTitleProps) {
  return (
    <div className={styles.title} {...props}>
      {text}{' '}
      {count ? (
        <span className={styles['title__count']}>{`(${count})`}</span>
      ) : null}
    </div>
  );
}

export function CardContent({
  disableTopPadding,
  children,
  ...props
}: CardContentProps) {
  const isTopPaddingDisabled = disableTopPadding;
  return (
    <div
      className={clsx(styles.content, {
        [styles['is-top-padding-disabled']]: isTopPaddingDisabled,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardStat({ title, value, ...props }: CardStatProps) {
  return (
    <div className={styles.stat} {...props}>
      <div className={styles['stat__title']}>{title}</div>
      {value}
    </div>
  );
}

export function CardStatValue({ children, ...props }: CardStatValueProps) {
  return (
    <div className={styles.statValue} {...props}>
      {children || '-'}
    </div>
  );
}

interface CardActionProps {
  children: ReactNode;
}

export function CardActions({ children, ...props }: CardActionProps) {
  return (
    <div className={styles.actions} {...props}>
      {children}
    </div>
  );
}
