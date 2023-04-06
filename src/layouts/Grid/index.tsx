import { ReactNode } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
interface ElementDefinition {
  colspan?: number;
}

export interface GridProps {
  children: ReactNode[];
  gridDefinition?: ReadonlyArray<ElementDefinition>;
}

export function Grid({ gridDefinition = [], children }: GridProps) {
  return (
    <div className={styles.root}>
      {children.map((child, i) => {
        return (
          <div
            key={i}
            className={clsx(
              styles.column,
              getColumnClassNames('colspan', gridDefinition[i]?.colspan)
            )}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

function getColumnClassNames(prop: string, mapping?: number): string | null {
  if (mapping === undefined) {
    return null;
  }
  return styles[`${prop}-${mapping}`];
}
