import * as Accordion from '@radix-ui/react-accordion';
import { ReactNode } from 'react';

import styles from './index.module.scss';
import { StatusIndicator } from '../StatusIndicator';
import { MaterialIcon } from '../MaterialIcon';
import { StatusType } from '../../types';
import { StepItem } from '../StepItem';

interface StepItemDefinition {
  text: ReactNode;
  type?: StatusType;
  statusIndicatorText?: string;
  actions?: ReactNode;
}

export interface StepProps extends Accordion.AccordionItemProps {
  text: string;
  type?: StatusType;
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
      return <StatusIndicator type="loading">{loadingText}</StatusIndicator>;
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
