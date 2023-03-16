import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import styles from './index.module.scss';

interface Props extends RadioGroupPrimitive.RadioGroupItemProps {
  label?: string;
}

export const RadioGroup = RadioGroupPrimitive.Root;
export const RadioGroupItem = RadioGroupPrimitive.Item;
export const RadioGroupIndicator = RadioGroupPrimitive.Indicator;

function Radio({ label, ...props }: Props) {
  return (
    <div className={styles.root}>
      <RadioGroupItem
        {...props}
        onClick={(e) => e.stopPropagation()}
        className={styles.item}
      >
        <RadioGroupIndicator className={styles.indicator}></RadioGroupIndicator>
      </RadioGroupItem>
      {label && (
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
      )}
    </div>
  );
}

export default Radio;
