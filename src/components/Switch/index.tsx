import * as SwitchPrimitive from '@radix-ui/react-switch';

import styles from './index.module.scss';

interface Props extends SwitchPrimitive.SwitchProps {
  label?: string;
}

function Switch({ label, ...props }: Props) {
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

export default Switch;
