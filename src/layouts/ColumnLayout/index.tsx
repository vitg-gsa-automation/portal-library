import React from 'react';
import { ReactNode } from 'react';

import styles from './index.module.scss';

interface ColumnLayoutProps {
  columns: number;
  children: ReactNode;
}

export function ColumnLayout({ columns, children }: ColumnLayoutProps) {
  const columnStyle = {
    flexBasis: `${100 / columns}%`,
  };

  return (
    <div className={styles.root}>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={columnStyle} className={styles.column}>
          {child}
        </div>
      ))}
    </div>
  );
}
