import { Input } from '../Input';

import styles from './index.module.scss';

interface TextFilterProps extends React.InputHTMLAttributes<HTMLInputElement> {
  filteringText: string;
  filteringPlaceholder?: string;
  filteringAriaLabel?: string;
}

export function TextFilter({
  filteringText,
  filteringPlaceholder,
  filteringAriaLabel,
  ...props
}: TextFilterProps) {
  return (
    <div className={styles.root}>
      <Input
        icon="search"
        value={filteringText}
        placeholder={filteringPlaceholder}
        aria-label={filteringAriaLabel}
        {...props}
      />
    </div>
  );
}
