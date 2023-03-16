import clsx from 'clsx';

import styles from './index.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
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

function Avatar({
  size = 'default',
  name = 'Aaron Nolan',
  className,
  ...props
}: Props) {
  return (
    <div className={clsx(styles.root, styles[size], className)} {...props}>
      {getAbbrev(name)}
    </div>
  );
}

export default Avatar;
