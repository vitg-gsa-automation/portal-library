import { RadioGroup } from '@radix-ui/react-radio-group';
import { Tile } from './tile';

import styles from './index.module.scss';

interface TileDefinition {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface TilesProps {
  onChange?: (value: string) => void;
  value?: string;
  items?: ReadonlyArray<TileDefinition>;
}

export function Tiles({ value, items, onChange }: TilesProps) {
  return (
    <RadioGroup value={value} onValueChange={onChange} className={styles.root}>
      {items?.map((item) => {
        return (
          <Tile
            key={item.value}
            checked={item.value === value}
            value={item.value}
            label={item.label}
            description={item.description}
          />
        );
      })}
    </RadioGroup>
  );
}
