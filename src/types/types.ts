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

export interface buttonProps {
  onClick?: () => void;
  title: string;
  icon?: {
    src: string;
    alt: string;
  };
  grayIcon?: {
    src: string;
    alt: string;
  };
  status: boolean;
  id?: string;
  className?: string[];
}
