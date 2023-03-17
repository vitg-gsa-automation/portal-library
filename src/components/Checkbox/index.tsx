import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import styles from './index.module.scss';
import { MaterialIcon } from '../MaterialIcon';

const CheckboxIndicator = CheckboxPrimitive.Indicator;

interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox({ ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      {...props}
      onClick={(e) => e.stopPropagation()}
      className={styles.root}
    >
      <CheckboxIndicator className={styles['root__indicator']} asChild>
        <MaterialIcon icon="done" fontSize="1.4rem" />
      </CheckboxIndicator>
    </CheckboxPrimitive.Root>
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
