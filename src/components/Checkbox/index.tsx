import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';
import { ReactNode } from 'react';

const CheckboxIndicator = CheckboxPrimitive.Indicator;

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  label?: ReactNode;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <div className={styles.root}>
      <CheckboxPrimitive.Root
        {...props}
        onClick={(e) => e.stopPropagation()}
        className={styles.checkbox}
      >
        <CheckboxIndicator className={styles.indicator} asChild>
          <MaterialIcon icon="done" fontSize="1.4rem" />
        </CheckboxIndicator>
      </CheckboxPrimitive.Root>
      {label && (
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
      )}
    </div>
  );
}

export function RadioCheckbox({ ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      {...props}
      onClick={(e) => e.stopPropagation()}
      className={styles.radio}
    >
      <CheckboxIndicator
        className={styles['radio__indicator']}
      ></CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
}
