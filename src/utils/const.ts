import { PrivacyItem, SideMenuItemData } from "@/types/types";
import { SideMenuItem } from "./enums";

const sideMenuData: { [key in SideMenuItem]: { icon: string; href: string } } =
  {
    [SideMenuItem.Dashboard]: {
      icon: "/images/dashboard.svg",
      href: "/dashboard",
    },
    [SideMenuItem.Configuracoes]: {
      icon: "/images/configuracoes.svg",
      href: "/dashboard/configuracoes",
    },
    [SideMenuItem.ConteudoHome]: {
      icon: "/images/home.svg",
      href: "/dashboard/conteudo-home",
    },
    [SideMenuItem.Cupons]: {
      icon: "/images/coupons.svg",
      href: "/dashboard/cupons",
    },
    [SideMenuItem.Selos]: {
      icon: "/images/selo.svg",
      href: "/dashboard/selos",
    },
    [SideMenuItem.Denuncias]: {
      icon: "/images/denuncia.svg",
      href: "/dashboard/denuncias",
    },
    [SideMenuItem.Usuarios]: {
      icon: "/images/usuarios.svg",
      href: "/dashboard/usuarios",
    },
    [SideMenuItem.PoliticasTermos]: {
      icon: "/images/politica.svg",
      href: "/dashboard/privacy",
    },
    [SideMenuItem.Series]: {
      icon: "/images/series.svg",
      href: "/dashboard/series",
    },
    [SideMenuItem.MeuPerfil]: {
      icon: "/images/meu-perfil.svg",
      href: "/dashboard/meu-perfil",
    },
  };

export const menuItem: SideMenuItemData[] = Object.entries(sideMenuData).map(
  ([name, { icon, href }]) => ({
    name: name as SideMenuItem,
    href,
    current: false,
    icon,
    alt: name as SideMenuItem,
  })
);

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
