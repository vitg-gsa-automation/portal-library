import * as SwitchPrimitive from '@radix-ui/react-switch';

import styles from './index.module.scss';

interface SwitchProps extends SwitchPrimitive.SwitchProps {
  id?: any;
  label?: string;
}

export function Switch({ label, id, ...props }: SwitchProps) {
  return (
    <div className={styles.root}>
      <SwitchPrimitive.Root className={styles.switch} id={id} {...props}>
        <SwitchPrimitive.Thumb className={styles.thumb} />
      </SwitchPrimitive.Root>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}
