import { PrivacyItem, SideMenuItemData, cupom } from "@/types/types";
import { PrivacyItemStatus, PrivacyItemType, SideMenuItem } from "./enums";

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
    status: PrivacyItemStatus.Ativo,
    type: PrivacyItemType.TermosUso,
    version: 2,
    publish: true,
    date: "23/08/2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Política de privacidade e Cookies",
    status: PrivacyItemStatus.Inativo,
    type: PrivacyItemType.PoliticaPrivacidade,
    publish: true,
    version: 1,
    date: "12/08/2022",
    description: "Lorem ipsum dolor sit amet",
  },
];

export const cuponsMock: cupom[] = [
  {
    id: 1,
    nome: "Cupom 1",
    descricao: "Cupom 1",
    codigo: "ABC123",
    usoLimite: 10,
    diaQtd: 30,
    validade: new Date("2023-12-31"),
    status: PrivacyItemStatus.Ativo,
    createdAt: new Date("2021-08-31"),
  },
  {
    id: 2,
    nome: "Cupom 2",
    descricao: "Cupom 2",
    codigo: "DEF456",
    usoLimite: 5,
    diaQtd: 15,
    validade: new Date("2023-11-30"),
    status: PrivacyItemStatus.Ativo,
    createdAt: new Date("2021-08-31"),
  },
  {
    id: 3,
    nome: "Cupom 3",
    descricao: "Cupom 3",
    codigo: "GHI789",
    usoLimite: 20,
    diaQtd: 60,
    validade: new Date("2023-10-31"),
    status: PrivacyItemStatus.Ativo,
    createdAt: new Date("2021-08-31"),
  },
  {
    id: 4,
    nome: "Cupom 4",
    descricao: "Cupom 4",
    codigo: "JKL012",
    usoLimite: 3,
    diaQtd: 10,
    validade: new Date("2023-09-30"),
    status: PrivacyItemStatus.Ativo,
    createdAt: new Date("2021-08-31"),
  },
  {
    id: 5,
    nome: "Cupom 5",
    descricao: "Cupom 5",
    codigo: "MNO345",
    usoLimite: 8,
    diaQtd: 25,
    validade: new Date("2023-08-31"),
    status: PrivacyItemStatus.Ativo,
    createdAt: new Date("2021-08-31"),
  },
  {
    id: 6,
    nome: "Cupom 6",
    descricao: "Cupom 6",
    codigo: "PQR678",
    usoLimite: 15,
    diaQtd: 45,
    validade: new Date("2023-07-31"),
    status: PrivacyItemStatus.Ativo,
    createdAt: new Date("2021-08-31"),
  },
  {
    id: 7,
    nome: "Cupom 7",
    descricao: "Cupom 7",
    codigo: "STU901",
    usoLimite: 2,
    diaQtd: 5,
    validade: new Date("2023-06-30"),
    status: PrivacyItemStatus.Ativo,
    createdAt: new Date("2021-08-31"),
  },
  {
    id: 8,
    nome: "Cupom 8",
    descricao: "Cupom 8",
    codigo: "VWX234",
    usoLimite: 12,
    diaQtd: 35,
    validade: new Date("2023-05-31"),
    status: PrivacyItemStatus.Ativo,
    createdAt: new Date("2021-08-31"),
  },
  {
    id: 9,
    nome: "Cupom 9",
    descricao: "Cupom 9",
    codigo: "YZA567",
    usoLimite: 7,
    diaQtd: 20,
    validade: new Date("2023-04-30"),
    status: PrivacyItemStatus.Ativo,
    createdAt: new Date("2021-08-31"),
  },
  {
    id: 10,
    nome: "Cupom 10",
    descricao: "Cupom 10",
    codigo: "BCD890",
    usoLimite: 6,
    diaQtd: 18,
    validade: new Date("2023-03-31"),
    status: PrivacyItemStatus.Inativo,
    createdAt: new Date("2021-08-31"),
  },
];
