import * as SwitchPrimitive from '@radix-ui/react-switch';

import styles from './index.module.scss';

interface SwitchProps extends SwitchPrimitive.SwitchProps {
  label?: string;
}

export function Switch({ label, ...props }: SwitchProps) {
  return (
    <div className={styles.root}>
      <SwitchPrimitive.Root className={styles.switch} id={label} {...props}>
        <SwitchPrimitive.Thumb className={styles.thumb} />
      </SwitchPrimitive.Root>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
    </div>
  );
}
