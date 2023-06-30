export type MenuItem = {
  id: any;
  text: string;
  onSelect?: () => void;
  href?: string;
  external?: boolean;
};

export type MenuItemOrGroup = MenuItem | MenuItemGroup;

export interface MenuItemGroup {
  id: string;
  items: MenuItemOrGroup[];
  text?: string;
}

export type MenuItems = ReadonlyArray<MenuItemOrGroup>;
