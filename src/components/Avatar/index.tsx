import clsx from 'clsx';

import styles from './index.module.scss';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'default';
  name?: string;
}

export function getAbbrev(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2);
}

export function Avatar({
  size = 'default',
  name = 'Aaron Nolan',
  className,
  ...props
}: AvatarProps) {
  return (
    <div className={clsx(styles.root, styles[size], className)} {...props}>
      {getAbbrev(name)}
    </div>
  );
}
