import { SelectMenu } from '../Select';
import { useCombobox } from 'downshift';

import styles from './index.module.scss';
import { Input, InputProps } from '../Input';
import { Item } from '../../types/form';
import { ListItem } from '../../internal/components/ListItem';

interface ComboBoxProps extends InputProps {
  selectedItem?: Item;
  items: Item[];
  placeholder?: string;
  name?: string;
  error?: string;
  onSelectedItemChange: (item: Item) => any;
  onInputValueChange: (inputValue?: string) => any;
}

export function ComboBox({
  selectedItem,
  items,
  placeholder,
  name,
  error,
  onSelectedItemChange,
  onInputValueChange,
  ...props
}: ComboBoxProps) {
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    selectedItem,
    items,
    itemToString(item) {
      return item?.label ? item.label : '';
    },
    onInputValueChange: async function ({ inputValue }) {
      onInputValueChange(inputValue);
    },
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (newSelectedItem) onSelectedItemChange(newSelectedItem);
    },
  });

  const renderItems = function () {
    if (!items.length) return null;
    return items.map((item, index) => (
      <ListItem
        key={index}
        item={item}
        highlighted={highlightedIndex === index}
        selected={selectedItem === item}
        {...getItemProps({ item, index })}
      />
    ));
  };
  return (
    <div className={styles.root}>
      <Input
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        error={error}
        {...props}
        {...getInputProps()}
      />
      <SelectMenu open={isOpen} {...getMenuProps()}>
        {isOpen && renderItems()}
      </SelectMenu>
    </div>
  );
}
