import { SideMenuItemData } from "@/types/types";
import { SideMenuItem } from "./enums";

export const menuItem: SideMenuItemData[] = [
  {
    name: SideMenuItem.Dashboard,
    href: "/dashboard",
    current: false,
  },
  {
    name: SideMenuItem.Configuracoes,
    href: "/dashboard/configuracoes",
    current: false,
  },
  {
    name: SideMenuItem.ConteudoHome,
    href: "/dashboard/conteudo-home",
    current: false,
  },
  {
    name: SideMenuItem.Cupons,
    href: "/dashboard/cupons",
    current: false,
  },
  {
    name: SideMenuItem.Selos,
    href: "/dashboard/selos",
    current: false,
  },
  {
    name: SideMenuItem.Denuncias,
    href: "/dashboard/denuncias",
    current: false,
  },
  {
    name: SideMenuItem.Usuarios,
    href: "/dashboard/usuarios",
    current: false,
  },
  {
    name: SideMenuItem.PoliticasTermos,
    href: "/dashboard/politicas-termos",
    current: false,
  },
  {
    name: SideMenuItem.Series,
    href: "/dashboard/series",
    current: false,
  },
  {
    name: SideMenuItem.MeuPerfil,
    href: "/dashboard/meu-perfil",
    current: false,
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
