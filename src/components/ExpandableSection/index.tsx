import { ReactNode } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';
import { Header } from '../../layouts/Header';
import { Card } from '../../layouts/Card';
import clsx from 'clsx';

export interface ExpandableSectionProps extends Collapsible.CollapsibleProps {
  headerText?: string;
  headerCounter?: string;
  headerDescription?: string;
  headerActions?: ReactNode;
  headerInfo?: ReactNode;
  variant?: 'default' | 'card';
  children: ReactNode;
}
export function ExpandableSection({
  headerText,
  headerCounter,
  headerDescription,
  headerActions,
  headerInfo,
  variant = 'default',
  children,
  ...props
}: ExpandableSectionProps) {
  switch (variant) {
    case 'card':
      return (
        <Collapsible.Root className={styles.root} {...props}>
          <Card
            header={
              <Header
                variant="h2"
                title={
                  <Collapsible.Trigger
                    className={clsx(styles.trigger, styles[variant])}
                  >
                    <MaterialIcon
                      icon="play_arrow"
                      className={clsx(styles.icon, styles[variant])}
                      fontSize="2rem"
                      type="round"
                    />
                    {headerText}
                  </Collapsible.Trigger>
                }
                count={headerCounter}
                description={headerDescription}
                actions={headerActions}
                info={headerInfo}
              />
            }
          >
            <Collapsible.Content>{children}</Collapsible.Content>
          </Card>
        </Collapsible.Root>
      );

    default:
      return (
        <Collapsible.Root className={styles.root} {...props}>
          <Collapsible.Trigger
            className={clsx(styles.trigger, styles[variant])}
          >
            <MaterialIcon
              icon="play_arrow"
              className={clsx(styles.icon, styles[variant])}
              fontSize="2rem"
              type="round"
            />
            {headerText}
          </Collapsible.Trigger>
          <Collapsible.Content className={styles.content}>
            {children}
          </Collapsible.Content>
        </Collapsible.Root>
      );
  }
}
