import { SideMenuItem } from "@/utils/enums";

type MenuItemData = {
  name: string;
  href: string;
};

export type SideMenuItemData = MenuItemData & {
  name: SideMenuItem;
  current: boolean;
};

export type profileMenuItemData = MenuItemData & {
  icon: React.ReactNode;
  alt: string;
};
