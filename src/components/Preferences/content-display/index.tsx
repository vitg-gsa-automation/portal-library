import { ContentDisplayOption } from './content-display-option';
import { PreferencesProps } from '../interfaces';
import styles from './index.module.scss';
import { OptionWithVisibility, getSortedOptions } from './utils';

interface ContentDisplayPreferenceProps
  extends PreferencesProps.ContentDisplayPreference {
  value?: ReadonlyArray<PreferencesProps.ContentDisplayItem>;
  onChange: (
    contentDisplay: ReadonlyArray<PreferencesProps.ContentDisplayItem>
  ) => void;
}

export function ContentDisplayPreference({
  title = 'Column preferences',
  description = "Customize the columns' visibility.",
  options,
  value = options.map(({ id }) => ({ id, visible: true })),
  onChange,
}: ContentDisplayPreferenceProps) {
  const onToggle = (option: OptionWithVisibility) => {
    onChange(
      value.map((item) =>
        item.id === option.id ? { ...item, visible: !option.visible } : item
      )
    );
  };
  if (!value) return null;

  const sortedOptions = getSortedOptions({ options, contentDisplay: value });

  return (
    <div className={styles.root}>
      <span className={styles.title}>{title}</span>
      <p className={styles.description}>{description}</p>
      <ul className={styles.list}>
        {sortedOptions.map((option, index) => (
          <ContentDisplayOption
            key={index}
            option={option}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}
