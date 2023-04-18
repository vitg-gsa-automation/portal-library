import { RadioGroupItemProps } from '@radix-ui/react-radio-group';

import { MaterialIcon } from '../MaterialIcon';
import { RadioGroupIndicator, RadioGroupItem } from '../Radio';
import styles from './index.module.scss';

export interface TileProps extends RadioGroupItemProps {
  label: string;
  description?: string;
}

export function Tile({ label, description, checked, ...props }: TileProps) {
  return (
    <RadioGroupItem className={styles.tile} {...props}>
      <RadioGroupIndicator className={styles.indicator} asChild forceMount>
        <MaterialIcon
          type="outlined"
          fontSize="1.8rem"
          icon={checked ? 'radio_button_checked' : 'radio_button_unchecked'}
        />
      </RadioGroupIndicator>
      <div className={styles.content}>
        <div className={styles.label}>{label}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </RadioGroupItem>
  );
}
