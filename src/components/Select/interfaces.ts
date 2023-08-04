import { OptionDefinition } from '../../internal/components/Option';

interface BaseSelectProps {
  items: SelectProps.Items;
  selectedItem?: SelectProps.Item;
  placeholder?: string;
  triggerVariant?: 'label' | 'option';
  error?: string;
  invalid?: boolean;
  className?: string;
  loading?: boolean;
  loadingText?: string;
  errorText?: string;
  renderWithPortal?: boolean;
  onSelectChange: (item: SelectProps.Item) => any;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

export interface SelectProps extends BaseSelectProps {}

export namespace SelectProps {
  export type Item = OptionDefinition;
  export type Items = OptionDefinition[];
}
