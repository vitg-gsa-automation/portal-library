import { MenuItemOrGroup } from '../../internal/components/MenuDropdown/interfaces';

export interface MenuDropdownUtility {
  type: 'menu-dropdown';
  text: string;
  items: ReadonlyArray<MenuItemOrGroup>;
  icon?: string;
  description?: string;
}

export interface ButtonUtility {
  type: 'button';
}

export type Utility = MenuDropdownUtility | ButtonUtility;
