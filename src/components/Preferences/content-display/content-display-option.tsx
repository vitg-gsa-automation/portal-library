import { Switch } from '../../Switch';
import { PreferencesProps } from '../interfaces';

import styles from './content-display-option.module.scss';
import { OptionWithVisibility } from './utils';

interface ContentDisplayOptionProps {
  option: OptionWithVisibility;
  onToggle?: (option: OptionWithVisibility) => void;
}
export function ContentDisplayOption({
  option,
  onToggle,
}: ContentDisplayOptionProps) {
  const { id, label, alwaysVisible, visible } = option;
  const handleCheckedChange = function (checked: boolean) {
    onToggle && onToggle(option);
  };
  return (
    <li className={styles.root}>
      <div className={styles.option}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <Switch
          disabled={alwaysVisible}
          id={id}
          checked={visible}
          onCheckedChange={handleCheckedChange}
        />
      </div>
    </li>
  );
}
