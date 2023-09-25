import { RadioGroup } from '../../RadioGroup';
import { FormField } from '../../FormField';
import { PreferencesProps } from '../interfaces';

interface PageSizePreferenceProps {
  pageSizePreference: PreferencesProps.PageSizePreference;
  onChange: (value: number) => void;
  value?: number;
}
export function PageSizePreference({
  value,
  onChange,
  pageSizePreference,
}: PageSizePreferenceProps) {
  const { title = 'Page size', options } = pageSizePreference;
  return (
    <FormField label={title} labelId="page-size">
      <RadioGroup
        aria-labelledby="page-size"
        value={value?.toString()}
        onValueChange={(value) => {
          onChange(+value);
        }}
        items={options.map(({ value, label }) => {
          return {
            id: label,
            value: value.toString(),
            label,
            disabled: false,
          };
        })}
      />
    </FormField>
  );
}
