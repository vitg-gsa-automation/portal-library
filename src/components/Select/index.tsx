import { forwardRef, ReactNode, useEffect, useRef } from 'react';
import { clsx } from 'clsx';

import styles from './index.module.scss';
import Empty from 'components/Empty';
import Item from 'components/Item';
import MaterialIcon from 'components/MaterialIcon';
import { useSelect } from 'downshift';
import { InputError } from '../Input';

function itemToString(item: any) {
  return item ? item.title : '';
}

export interface Item<T = any> {
  label?: string;
  value?: T;
}

interface Props {
  items: Item[];
  selectedItem?: Item;
  onSelectChange: (item: Item) => any;
  placeholder?: string;
  error?: string;
}

export function Select({
  items,
  selectedItem,
  placeholder = 'Placeholder',
  onSelectChange,
  error,
  ...props
}: Props) {
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    itemToString,
    selectedItem,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (newSelectedItem) onSelectChange(newSelectedItem);
    },
  });

  const renderItems = function () {
    if (!items.length) return <Empty main="No items" />;
    return items.map((item, index) => (
      <SelectItem
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
      <div
        className={styles['root__toggle']}
        {...props}
        {...getToggleButtonProps()}
      >
        <span>{selectedItem?.label ? selectedItem.label : placeholder}</span>
        <MaterialIcon
          className={styles['root__toggle__icon']}
          icon="play_arrow"
          type="round"
          style={{ rotate: isOpen ? '270deg' : '90deg', fontSize: '1.8rem' }}
        />
      </div>
      <SelectMenu open={isOpen} {...getMenuProps()}>
        {isOpen && renderItems()}
      </SelectMenu>
      {error && <InputError error={error} />}
    </div>
  );
}
interface SelectItemProps {
  children?: ReactNode;
  item: Item;
  highlighted?: boolean;
  selected?: boolean;
}

export const SelectItem = forwardRef<HTMLLIElement, SelectItemProps>(
  (
    { highlighted, selected, item, children, ...props }: SelectItemProps,
    ref
  ) => {
    const myRef = useRef<HTMLLIElement>(null);
    useEffect(() => {
      if (highlighted) myRef.current?.setAttribute('data-highlighted', 'true');
      else myRef.current?.removeAttribute('data-highlighted');
    }, [highlighted]);

    return (
      <Item ref={myRef} {...props}>
        <span>{item.label}</span>
      </Item>
    );
  }
);

interface SelectMenuProps {
  open?: boolean;
  children?: ReactNode;
}

export const SelectMenu = forwardRef<HTMLUListElement, SelectMenuProps>(
  ({ open, children, ...props }: SelectMenuProps, ref) => {
    return (
      <ul
        ref={ref}
        className={clsx(styles.menu, !open && styles['menu--close'])}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
