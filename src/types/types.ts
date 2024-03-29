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
  onClick?: () => void;
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
  nome: string;
  tipo?: PrivacyItemType;
  id_tipo_politica: number;
  versao: number;
  ativo: number;
  data_inclusao: string;
  data_alteracao?: Date;
  descricao: string;
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

export interface user {
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
  password?: string;
}
export interface User {
  id: number;
  nome: string;
  email: string;
  role: UserRole;
  fotoPath: string;
  ativo: number;
  data_validade_assinatura: string;
  descricao?: string;
}

export interface UpdateUser {
  id?: number;
  nome?: string;
  fotoPath?: string;
  ativo?: number;
  descricao?: string;
  senha?: string;
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


export interface PostLogin {
  email: string;
  password: string;
}

export interface LoginResponse{
  token: string;
  user: User;
  stayConnected: boolean;
}

export interface CreateUser {
  nome: string;
  email: string;
  senha: string;
}

export interface CreateUserResponse { // ESPERANDO FIX DO AUTH
  id: number;
  nome: string;
}

export interface RegisterFormFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterFormErrors {
  name?: string;
  email?: string;
  password?: string;
}

export interface ToastService {
  success: (message: string) => void;
  error: (message?: string) => void;
  warn: (message: string) => void;
  // Add other toast methods like warn(), info(), etc. if needed
}

export interface Response {
  success: any;
  message: string;
  sucess: boolean;
  error?: string;
  data?: any;
  fotoPath?: string;
}
export type ResetPasswordResponse = Response & {
  token: string;
  email: string;
}

export interface ResetPasswordProps {
  onSuccess: () => void;
}

export interface ContentItem {
  vitrine_conteudo_id: number;
  vitrine_conteudo_nome: string;
  vitrine_conteudo_ordem: number;
  conteudo_nome: string;
  conteudo_id: number;
  imagem_banner: string;
  imagem_capa: string;
  cvc_id: number;
  cvc_ordem: number;
}

export interface ContentHomeResponse {
  [key: string]: ContentItem[];
}

export interface HomePageSection {
  vitrine_conteudo_id: number;
  vitrine_conteudo_nome: string;
  vitrine_conteudo_ordem: number;
  conteudo_nome: string;
  conteudo_id: number;
  imagem_banner: string;
  imagem_capa: string;
  cvc_id: number;
  cvc_ordem: number;
}