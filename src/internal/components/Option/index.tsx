import { forwardRef, useEffect, useRef } from 'react';

import clsx from 'clsx';
import { MaterialIcon } from '../../../components/MaterialIcon';
import styles from './index.module.scss';

export interface OptionDefinition<T = any> {
  label?: string;
  value?: T;
  icon?: string;
  labelTag?: string;
  description?: string;
  iconUrl?: string;
  tags?: ReadonlyArray<string>;
}

interface OptionProps {
  option: OptionDefinition;
  highlighted?: boolean;
  selected?: boolean;
}

export const Option = forwardRef<HTMLDivElement, OptionProps>(
  ({ option, highlighted, selected, ...props }: OptionProps, ref) => {
    const myRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (highlighted) {
        myRef.current?.setAttribute('data-highlighted', 'true');
        myRef.current?.scrollIntoView({ block: 'nearest' });
      } else myRef.current?.removeAttribute('data-highlighted');
    }, [highlighted]);

    const { label, icon, labelTag, description, tags } = option;

    return (
      <div ref={myRef} className={styles.root} {...props}>
        {icon && (
          <MaterialIcon icon={icon} className={styles.icon} fontSize="2.8rem" />
        )}
        <div className={styles.content}>
          <div className={styles['label-content']}>
            <span className={styles.label}>{label}</span>
            {labelTag && <span className={styles.labeltag}>{labelTag}</span>}
          </div>
          {description && (
            <div className={styles.description}>{description}</div>
          )}
          {tags && (
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
