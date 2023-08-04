import { OptionDefinition } from '../../internal/components/Option';

interface BaseSelectProps {
  items: SelectProps.Items;
  selectedItem?: SelectProps.Item;
  onSelectChange: (item: SelectProps.Item) => any;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  placeholder?: string;
  error?: string;
  invalid?: boolean;
  className?: string;
  loading?: boolean;
  loadingText?: string;
  errorText?: string;
  renderWithPortal?: boolean;
}

export interface SelectProps extends BaseSelectProps {}

export namespace SelectProps {
  export type Item = OptionDefinition;
  export type Items = OptionDefinition[];
}
