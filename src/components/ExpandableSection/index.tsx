import * as Collapsible from '@radix-ui/react-collapsible';
import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';
import { ReactNode } from 'react';

export interface ExpandableSectionProps {
  header?: ReactNode;
  headerText?: string;
  children: ReactNode;
}
export function ExpandableSection({
  header,
  headerText,
  children,
}: ExpandableSectionProps) {
  const _header = header || headerText;
  return (
    <Collapsible.Root className={styles.root}>
      <Collapsible.Trigger className={styles.trigger}>
        <MaterialIcon
          icon="play_arrow"
          className={styles.icon}
          fontSize="2rem"
          type="round"
        />
        {_header}
      </Collapsible.Trigger>
      <Collapsible.Content className={styles.content}>
        {children}
      </Collapsible.Content>{' '}
    </Collapsible.Root>
  );
}
