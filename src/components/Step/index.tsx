import * as Accordion from '@radix-ui/react-accordion';
import { ReactNode } from 'react';

import { MaterialIcon } from '../MaterialIcon';
import { StatusIndicator, StatusIndicatorType } from '../StatusIndicator';
import { StepItem } from '../StepItem';
import styles from './index.module.scss';

interface StepItemDefinition {
  text: ReactNode;
  type?: StatusIndicatorType;
  statusIndicatorText?: string;
  actions?: ReactNode;
}

export interface StepProps extends Accordion.AccordionItemProps {
  text: string;
  type?: StatusIndicatorType;
  items?: ReadonlyArray<StepItemDefinition>;
  children?: ReactNode[];
  loading?: boolean;
  loadingText?: string;
  statusIndicatorText?: string;
}

export function Step({
  children,
  items,
  text,
  type,
  loading = false,
  loadingText = 'Validating',
  statusIndicatorText = 'OK',
  ...props
}: StepProps) {
  const renderStatusIndicator = function () {
    if (loading)
      return (
        <StatusIndicator type={StatusIndicatorType.Loading}>
          {loadingText}
        </StatusIndicator>
      );
    if (!type) return null;
    return <StatusIndicator type={type}>{statusIndicatorText}</StatusIndicator>;
  };
  return (
    <Accordion.Item className={styles.root} {...props}>
      <Accordion.Trigger className={styles.trigger}>
        <div className={styles.toggle}>
          {!!items?.length && (
            <MaterialIcon
              icon="play_arrow"
              className={styles.icon}
              fontSize="1.8rem"
              type="round"
            />
          )}
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.status}>{renderStatusIndicator()}</div>
      </Accordion.Trigger>
      {!!items?.length && (
        <Accordion.Content asChild>
          <div className={styles.content}>
            {items.map((item, index) => {
              return <StepItem key={index} {...item} />;
            })}
          </div>
        </Accordion.Content>
      )}
    </Accordion.Item>
  );
}
