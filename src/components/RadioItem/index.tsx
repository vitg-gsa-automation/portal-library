import { RadioGroupItemProps } from '@radix-ui/react-radio-group';

import styles from './index.module.scss';
import { RadioGroupItem, RadioGroupIndicator } from '../Radio';
import { MaterialIcon } from '../MaterialIcon';

interface RadioItemProps extends RadioGroupItemProps {
  title: string;
  text: string;
}

export function RadioItem({ title, text, ...props }: RadioItemProps) {
  return (
    <RadioGroupItem className={styles.root} {...props}>
      <RadioGroupIndicator className={styles.indicator} asChild forceMount>
        <MaterialIcon
          type="outlined"
          fontSize="1.8rem"
          icon={
            props.checked ? 'radio_button_checked' : 'radio_button_unchecked'
          }
        />
      </RadioGroupIndicator>
      <div className={styles.content}>
        <div className={styles['root__content__title']}>{title}</div>
        <div className={styles['root__content__text']}>{text}</div>
      </div>
    </RadioGroupItem>
  );
}
