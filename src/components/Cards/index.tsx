import { ReactElement, ReactNode } from 'react';

import styles from './index.module.scss';
import { Card, CardContent, Property } from '../../layouts';
import { Link, Chip } from '../../components';
import clsx from 'clsx';
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
}
export function Cards<T extends unknown>({
  header,
  cardsPerRow = 3,
  cardDefinition,
  items,
  ...props
}: CardsProps<T>) {
  const columnStyle = {
    flexBasis: `${100 / cardsPerRow}%`,
  };
  return (
    <div className={styles.root} {...props}>
      <Card header={header}></Card>
      <ol className={clsx(styles.list, header && styles['has-header'])}>
        {items.map((item, index) => {
          return (
            <li key={index} style={columnStyle}>
              <Card
                style={{
                  marginLeft: '2.4rem',
                  marginBottom: '2.4rem',
                  width: 'auto',
                }}
              >
                <CardContent>
                  {cardDefinition.header(item)}
                  {cardDefinition.sections.map((section) => (
                    <Property key={section.id} label={section.label}>
                      {section.value(item)}
                    </Property>
                  ))}
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
