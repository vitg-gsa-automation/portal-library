import { ForwardedRef, forwardRef } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface MaterialIconProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  fontSize?: string;
  type?: 'outlined' | 'round';
  icon: string;
}

interface MaterialIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: string;
  iconType?: 'outlined' | 'round';
  icon: string;
}

export const MaterialIcon = forwardRef(
  (
    { icon, fontSize = '2.4rem', type, className, ...props }: MaterialIconProps,
    forwardedRef: ForwardedRef<HTMLSpanElement>
  ) => {
    return (
      <span
        ref={forwardedRef}
        style={{ fontSize }}
        className={clsx(
          styles.root,
          `material-icons${type ? `-${type}` : ''}`,
          className
        )}
        {...props}
      >
        {icon}
      </span>
    );
  }
);

export function MaterialIconButton({
  icon,
  fontSize = '2.4rem',
  iconType,
  className,
  ...props
}: MaterialIconButtonProps) {
  return (
    <button
      style={{ fontSize }}
      className={clsx(
        styles.button,
        `material-icons${iconType ? `-${iconType}` : ''}`,
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
