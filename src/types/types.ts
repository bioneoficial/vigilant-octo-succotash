import {
  DENOUCE_TYPE,
  GENRES_NAMES,
  PrivacyItemStatus,
  PrivacyItemType,
  SideMenuItem,
  UserRole,
  modalTypeEnum,
} from "@/utils/enums";
import { AppProps } from "next/app";
import { FormEvent } from "react";

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
  status: PrivacyItemStatus;
  createdAt: Date;
}

export interface user { // ajeitar user com o banco, falta description, assinatura entre outros?
  id: number;
  nome: string;
  email: string;
  status?: boolean;
  imagem?: string;
  tipo?: UserRole;
  createdAt?:  string;
  cpf?: string | null;
  isSubscriber?: boolean;
  descricao?: string;
  fotoPath?: string;
}

export interface BannerSelectionProps {
  urlImageBannerSelection: string;
  setUrlImageBannerSelection: React.Dispatch<React.SetStateAction<string>>;
  showCheckLandingPageApp: boolean;
  setShowCheckLandingPageApp: React.Dispatch<React.SetStateAction<boolean>>;
  bannerLink?: string;
  setBannerLink?: React.Dispatch<React.SetStateAction<string>>;
}

export interface ConfigFormProps {
  setUrlImageBannerSelection: React.Dispatch<React.SetStateAction<string>>;
  setShowCheckLandingPageApp: React.Dispatch<React.SetStateAction<boolean>>;
  setBannerLink: React.Dispatch<React.SetStateAction<string>>;
  setShowBannerSelection: (show: boolean) => void;
  showBannerSelection: boolean;
  urlImageBannerSelection: string;
  showCheckLandingPageApp: boolean;
  bannerLink: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export interface UserFormProps {
  handleSubmitUser: (event: React.FormEvent<HTMLFormElement>) => void;
  urlImageBannerSelection: string;
  setUrlImageBannerSelection: React.Dispatch<React.SetStateAction<string>>;
}

export interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  children: React.ReactNode;
}

export interface PrivacyState {
  item: PrivacyItem | null;
}

export interface UserState {
  users: user[];
  selectedUser: user | null;
}

export interface MyAppProps {
  Component: React.ComponentType<AppProps>;
  pageProps: AppProps["pageProps"];
}
export interface DenounceItemProps {
  id: number;
  denouncerId: number;
  denouncerName: string;
  denounceType: DENOUCE_TYPE;
  denounceDetails: string;
  episodeImage: string;
  episodeId?: number;
  SerieName: string;
  autorName: string;
  autorId: number;
  denouceData: string;
}

export interface UserCardProps {
  name: string | undefined;
  isSubscriber: boolean;
  profileImage: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number | string) => void;
}

export interface Genres {
  id: number;
  name: GENRES_NAMES;
  desc: string | null;
  active: 1 | 0;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface Stamps{ // that can be series/conteudo too? 
  id: number;
  name: string;
  desc: string;
  image: string;
  active: 1 | 0;
  order: number;
  order_by_serie: string;
  featured: 1 | 0;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  series_count: number;
}

export interface SelosItemProps {
  Selos: Stamps[];
}

export interface MyError {
  message: string;
}

export interface getAllUsersResponse {
  data_inclusao: string;
  id: number;
  nome: string;
  descricao: string;
  email: string;
  fotoPath: string;
  ativo: boolean;
  tipo: UserRole;
}

export interface postUser {
  id?: number;
 nome: string;
 descricao: string;
 email: string;
 senha: string;
}

export interface updatePhoto {
  id: number;
  foto: File;
}

export interface PostLogin {
  email: string;
  password: string;
}