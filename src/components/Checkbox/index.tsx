import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import styles from './index.module.scss';
import MaterialIcon from '../MaterialIcon';

const CheckboxIndicator = CheckboxPrimitive.Indicator;

interface Props extends CheckboxPrimitive.CheckboxProps {}

function Checkbox({ ...props }: Props) {
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

export function RadioCheckbox({ ...props }: Props) {
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

export default Checkbox;
