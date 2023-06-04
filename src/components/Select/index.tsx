import {
  forwardRef,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { clsx } from 'clsx';
import { useSelect } from 'downshift';

import styles from './index.module.scss';
import { Empty } from '../Empty';
import { ListItem } from '../ListItem';
import { MaterialIcon } from '../MaterialIcon';
import { InputError } from '../Input';
import { Item } from '../../types/form';
import { StatusIndicator } from '../StatusIndicator';
import { createPortal } from 'react-dom';

function itemToString(item: Item<any> | null) {
  return item?.label ? item.label : '';
}

export interface SelectProps {
  items: Item[];
  selectedItem?: Item;
  onSelectChange: (item: Item) => any;
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

export function Select({
  items,
  selectedItem,
  placeholder = 'Placeholder',
  onSelectChange,
  onBlur,
  className,
  error,
  invalid,
  loading,
  loadingText = 'Loading resources',
  errorText,
  renderWithPortal = false,
  ...props
}: SelectProps) {
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
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const setMenuPosition = function (toggleRect: DOMRect, target: HTMLElement) {
    target.style.position = 'fixed';
    target.style.width = toggleRect.width + 'px';
    target.style.top = `${toggleRect.bottom}px`;
    target.style.left = `${toggleRect.left}px`;
  };
  useLayoutEffect(() => {
    if (!renderWithPortal || !isOpen) return;
    if (!toggleRef.current) return;
    if (!menuRef.current) return;
    setMenuPosition(toggleRef.current.getBoundingClientRect(), menuRef.current);
  }, [isOpen, renderWithPortal]);

  const renderItems = function () {
    if (loading)
      return (
        <div className={styles.single}>
          <StatusIndicator type="loading">{loadingText}</StatusIndicator>
        </div>
      );
    else if (errorText)
      return (
        <div className={styles.single}>
          <StatusIndicator type="error">{errorText}</StatusIndicator>
        </div>
      );
    if (!items.length) return <div className={styles.single}>No options</div>;
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
        className={clsx(styles.toggle, className, {
          [styles.error]: error,
          [styles.invalid]: invalid,
        })}
        {...props}
        {...getToggleButtonProps({ onBlur, ref: toggleRef })}
      >
        <span>{selectedItem?.label ? selectedItem.label : placeholder}</span>
        <MaterialIcon
          className={styles['toggle__icon']}
          icon="play_arrow"
          type="round"
          style={{ rotate: isOpen ? '270deg' : '90deg', fontSize: '1.8rem' }}
        />
      </div>
      <SelectMenu
        open={isOpen}
        renderWithPortal={renderWithPortal}
        {...getMenuProps({ ref: menuRef })}
      >
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
      if (highlighted) {
        myRef.current?.setAttribute('data-highlighted', 'true');
        myRef.current?.scrollIntoView({ block: 'nearest' });
      } else myRef.current?.removeAttribute('data-highlighted');
    }, [highlighted]);

    return (
      <ListItem ref={myRef} {...props}>
        <span>{item.label}</span>
      </ListItem>
    );
  }
);

interface SelectMenuProps {
  open?: boolean;
  children?: ReactNode;
  loading?: boolean;
  loadingText?: string;
  renderWithPortal?: boolean;
}

export const SelectMenu = forwardRef<HTMLUListElement, SelectMenuProps>(
  (
    { open, renderWithPortal = false, children, ...props }: SelectMenuProps,
    ref
  ) => {
    if (renderWithPortal) {
      return createPortal(
        <div>
          <ul
            className={clsx(styles.menu, !open && styles['menu--close'])}
            {...props}
            ref={ref}
          >
            {children}
          </ul>
        </div>,
        document.body
      );
    } else {
      return (
        <ul
          className={clsx(styles.menu, !open && styles['menu--close'])}
          {...props}
          ref={ref}
        >
          {children}
        </ul>
      );
    }
  }
);
