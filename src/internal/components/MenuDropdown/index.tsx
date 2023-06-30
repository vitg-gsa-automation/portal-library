import clsx from 'clsx';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownMenuProps,
  DropdownTrigger,
} from '../../../components/Dropdown';
import styles from './index.module.scss';
import { MenuItem, MenuItems } from './interfaces';
import { MaterialIcon } from '../../../components/MaterialIcon';

interface MenuDropdownProps extends DropdownMenuProps {
  items?: MenuItems;
  text?: string;
  description?: string;
}
export function MenuDropdown({ items, text, ...props }: MenuDropdownProps) {
  const renderItem = function (item: MenuItem) {
    if (item.href) {
      return (
        <a href={item.href} className={styles['menu-item']}>
          {item.text}
          {item.external && (
            <MaterialIcon
              icon="open_in_new"
              className={styles.external}
              fontSize="2rem"
            />
          )}
        </a>
      );
    } else return <span className={styles['menu-item']}>{item.text}</span>;
  };
  const renderItems = function (
    items?: MenuItems,
    hasCategoryHeader?: boolean
  ) {
    if (!items?.length) return null;
    return items.map((item) => {
      if ('items' in item) {
        // At this point, TypeScript knows `item` is a `MenuItemGroup`
        return (
          <li key={item.id} className={styles.category}>
            <div className={styles.heading}>{item.text}</div>
            <ul>{renderItems(item.items, true)}</ul>
          </li>
        );
      } else {
        // At this point, TypeScript knows `item` is a `MenuItem`
        return (
          <DropdownItem key={item.id} onSelect={item.onSelect} asChild>
            <li
              className={clsx(styles.item, {
                [styles['has-category-header']]: hasCategoryHeader,
              })}
            >
              {renderItem(item)}
            </li>
          </DropdownItem>
        );
      }
    });
  };
  return (
    <Dropdown modal={false} {...props}>
      <DropdownTrigger asChild>
        <button className={styles.trigger}>
          <MaterialIcon
            className={styles.user}
            icon="person"
            type="outlined"
            fontSize="2rem"
          />
          <span className={styles.text}>{text}</span>
          <MaterialIcon
            className={styles.icon}
            icon="play_arrow"
            type="round"
            fontSize="1.8rem"
          />
        </button>
      </DropdownTrigger>
      <DropdownContent
        className={styles.menu}
        side="bottom"
        align="end"
        style={{ zIndex: 99999 }}
      >
        <div className={styles.header}>
          <span className={styles.description}>{props.description}</span>
        </div>
        <ul className={styles.list}>{renderItems(items)}</ul>
      </DropdownContent>
    </Dropdown>
  );
}
