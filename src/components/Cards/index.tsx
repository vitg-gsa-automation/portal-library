import { ReactElement, ReactNode } from 'react';

import clsx from 'clsx';
import { Card, CardContent, Property } from '../../layouts';
import styles from './index.module.scss';
import { StatusIndicator } from '../StatusIndicator';
import { Empty } from '../Empty';
interface Section<T> {
  id: string;
  label: string;
  value: (item: T) => ReactNode;
}
interface CardDefinition<T> {
  header: (item: T) => ReactNode;
  sections: Section<T>[];
}
export interface CardsProps<T = any> {
  header?: ReactElement;
  cardsPerRow?: number;
  cardDefinition: CardDefinition<T>;
  items: T[];
  empty?: ReactNode;
  loading?: boolean;
  loadingText?: string;
}
export function Cards<T extends unknown>({
  header,
  cardsPerRow = 3,
  cardDefinition,
  items,
  empty,
  loading,
  loadingText = 'Loading resources',
  ...props
}: CardsProps<T>) {
  const columnStyle = {
    flexBasis: `${100 / cardsPerRow}%`,
    display: 'flex',
  };

  const renderContent = function () {
    if (loading)
      return (
        <div className={styles['loading']}>
          <StatusIndicator type="loading">{loadingText}</StatusIndicator>
        </div>
      );

    if (items.length === 0) {
      return empty || <Empty />;
    } else {
      return (
        <ol className={clsx(styles.list, header && styles['has-header'])}>
          {items.map((item, index) => {
            return (
              <li key={index} style={columnStyle}>
                <Card
                  style={{
                    marginLeft: '2.4rem',
                    marginBottom: '2.4rem',
                  }}
                >
                  <div className={styles.content}>
                    {cardDefinition.header(item)}
                    {cardDefinition.sections.map((section) => (
                      <Property key={section.id} label={section.label}>
                        {section.value(item)}
                      </Property>
                    ))}
                  </div>
                </Card>
              </li>
            );
          })}
        </ol>
      );
    }
  };
  return (
    <div className={styles.root} {...props}>
      <Card header={header}></Card>
      <div className={styles.wrapper}>{renderContent()}</div>
    </div>
  );
}
