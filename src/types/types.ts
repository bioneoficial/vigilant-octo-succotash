import {
  PrivacyItemStatus,
  PrivacyItemType,
  SideMenuItem,
  modalTypeEnum,
} from "@/utils/enums";

interface MenuItemData {
  name: string;
  href: string;
}

export type SideMenuItemData = MenuItemData & {
  name: SideMenuItem;
  current: boolean;
  icon: string;
  alt: string;
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

export interface MainTemplateProps {
  children: React.ReactNode;
}

export interface SideMenuDashboardProps {
  open: boolean;
}

export type HeaderDashboardProps = SideMenuDashboardProps & {
  toggleMenu: () => void;
};

export interface PrivacyItem {
  id: number;
  name: string;
  status: PrivacyItemStatus;
  type: PrivacyItemType;
  version: number;
  publish: boolean;
  date: string;
  description: string;
}

export interface modelTypeInterface {
  modalType: modalTypeEnum;
}
export type modalInterface = modelTypeInterface & {
  title: string;
  description: string;
  isOpen: boolean;
};

export interface cupom {
  id: number;
  nome: string;
  descricao: string;
  codigo: string;
  usoLimite: number;
  diaQtd: number;
  validade: Date;
  status: boolean;
  createdAt: Date;
}
