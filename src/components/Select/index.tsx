import { clsx } from 'clsx';
import { useSelect } from 'downshift';
import {
  forwardRef,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';

import { createPortal } from 'react-dom';
import { InputError } from '../Input';
import { MaterialIcon } from '../MaterialIcon';
import { StatusIndicator } from '../StatusIndicator';
import styles from './index.module.scss';
import { SelectProps } from './interfaces';
import { ListItem } from '../../internal/components/ListItem';
import { Option } from '../../internal/components/Option';

function itemToString(item: SelectProps.Item | null) {
  return item?.label ? item.label : '';
}

export function Select({
  items,
  selectedItem,
  placeholder = 'Placeholder',
  triggerVariant,
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

  const updateMenuPosition = function () {
    if (!toggleRef.current || !menuRef.current) return;
    const toggleRect = toggleRef.current.getBoundingClientRect();
    const target = menuRef.current;
    target.style.position = 'fixed';
    target.style.width = toggleRect.width + 'px';
    target.style.top = `${toggleRect.bottom}px`;
    target.style.left = `${toggleRect.left}px`;
  };

  useLayoutEffect(() => {
    if (!renderWithPortal || !isOpen) return;
    if (!toggleRef.current) return;
    if (!menuRef.current) return;
    updateMenuPosition();

    window.addEventListener('scroll', updateMenuPosition, true);
    window.addEventListener('resize', updateMenuPosition, true);
    return () => {
      window.removeEventListener('scroll', updateMenuPosition, true);
      window.removeEventListener('resize', updateMenuPosition, true);
    };
  }, [isOpen, renderWithPortal]);

  useEffect(() => {
    if (isOpen) {
      toggleRef.current?.setAttribute('data-state', 'open');
    } else toggleRef.current?.setAttribute('data-state', 'closed');
  }, [isOpen]);

  const renderTriggerVariant = function () {
    if (triggerVariant === 'option' && selectedItem?.label) {
      return <Option option={selectedItem} />;
    } else {
      return (
        <span className={styles.label}>
          {selectedItem?.label ? selectedItem.label : placeholder}
        </span>
      );
    }
  };

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
      <ListItem key={index} {...getItemProps({ item, index })}>
        <Option
          option={item}
          highlighted={highlightedIndex === index}
          selected={selectedItem === item}
        />
      </ListItem>
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
        {renderTriggerVariant()}
        <MaterialIcon
          className={styles.icon}
          icon="play_arrow"
          type="round"
          fontSize="1.8rem"
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
