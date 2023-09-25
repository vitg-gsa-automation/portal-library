import { PreferencesProps } from '../interfaces';

export interface OptionWithVisibility
  extends PreferencesProps.ContentDisplayOption {
  visible?: boolean;
}

export function getSortedOptions({
  options,
  contentDisplay,
}: {
  options: ReadonlyArray<PreferencesProps.ContentDisplayOption>;
  contentDisplay: ReadonlyArray<PreferencesProps.ContentDisplayItem>;
}): ReadonlyArray<OptionWithVisibility> {
  const optionsById: Record<string, PreferencesProps.ContentDisplayOption> =
    options.reduce(
      (currentValue, option) => ({ ...currentValue, [option.id]: option }),
      {}
    );
  return contentDisplay
    .map(({ id, visible }: PreferencesProps.ContentDisplayItem) => ({
      ...optionsById[id],
      visible,
    }))
    .filter(Boolean);
}
