import { PrivacyItem, SideMenuItemData } from "@/types/types";
import { SideMenuItem } from "./enums";

export const menuItem: SideMenuItemData[] = [
  {
    name: SideMenuItem.Dashboard,
    href: "/dashboard",
    current: false,
    icon: "/images/dashboard.svg",
    alt: "Dashboard",
  },
  {
    name: SideMenuItem.Configuracoes,
    href: "/dashboard/configuracoes",
    current: false,
    icon: "/images/configuracoes.svg",
    alt: "Configurações",
  },
  {
    name: SideMenuItem.ConteudoHome,
    href: "/dashboard/conteudo-home",
    current: false,
    icon: "/images/home.svg",
    alt: "Conteúdo Home",
  },
  {
    name: SideMenuItem.Cupons,
    href: "/dashboard/cupons",
    current: false,
    icon: "/images/coupons.svg",
    alt: "Cupons",
  },
  {
    name: SideMenuItem.Selos,
    href: "/dashboard/selos",
    current: false,
    icon: "/images/selo.svg",
    alt: "Selos",
  },
  {
    name: SideMenuItem.Denuncias,
    href: "/dashboard/denuncias",
    current: false,
    icon: "/images/denuncia.svg",
    alt: "Denúncias",
  },
  {
    name: SideMenuItem.Usuarios,
    href: "/dashboard/usuarios",
    current: false,
    icon: "/images/usuarios.svg",
    alt: "Usuários",
  },
  {
    name: SideMenuItem.PoliticasTermos,
    href: "/dashboard/privacy",
    current: false,
    icon: "/images/politica.svg",
    alt: "Políticas e termos",
  },
  {
    name: SideMenuItem.Series,
    href: "/dashboard/series",
    current: false,
    icon: "/images/series.svg",
    alt: "Séries",
  },
  {
    name: SideMenuItem.MeuPerfil,
    href: "/dashboard/meu-perfil",
    current: false,
    icon: "/images/meu-perfil.svg",
    alt: "Meu perfil",
  },
];

// export const profileMenuItems: profileMenuItemData[] = [
//   {
//     name: "Notificações",
//     href: "#notifications",
//     icon: "/images/bell.svg",
//     alt: "Notificações",
//   },
//   {
//     name: "Perfil",
//     href: "#profile",
//     icon: "/images/settings.svg",
//     alt: "Perfil",
//   },
//   {
//     name: "Sair",
//     href: "#logout",
//     icon: "/images/logout.svg",
//     alt: "Sair",
//   },
// ];

export const PrivacyItems: PrivacyItem[] = [
  {
    id: 2,
    name: "Termos de Uso",
    status: "Ativo",
    type: "Termos de uso",
    version: 2,
    date: "23/08/2022",
  },
  {
    id: 1,
    name: "Política de privacidade e Cookies",
    status: "Ativo",
    type: "Política de privacidade",
    version: 1,
    date: "12/08/2022",
  },
];
