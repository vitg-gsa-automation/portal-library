import { RadioGroupItemProps } from '@radix-ui/react-radio-group';

import styles from './index.module.scss';
import { RadioGroupItem, RadioGroupIndicator } from 'components/Radio';
import MaterialIcon from 'components/MaterialIcon';

interface Props extends RadioGroupItemProps {
  title: string;
  text: string;
}

function RadioItem({ title, text, ...props }: Props) {
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

export default RadioItem;
