export enum SideMenuItem {
  Dashboard = "Dashboard",
  Configuracoes = "Configurações",
  ConteudoHome = "Conteúdo Home",
  Cupons = "Cupons",
  Selos = "Selos",
  Denuncias = "Denúncias",
  Usuarios = "Usuários",
  PoliticasTermos = "Políticas e termos",
  Series = "Séries",
  MeuPerfil = "Meu perfil",
}

export enum PrivacyItemType {
  PoliticaPrivacidade = "Política de Privacidade",
  TermosUso = "Termos de Uso",
  PoliticaTermoAutor = "Política de Termo de Autor",
}

export enum PrivacyItemStatus {
  Ativo = "Ativo",
  Inativo = "Inativo",
}

export enum modalTypeEnum {
  empty = "",
  delete = "deleteConfirmation",
  CREATE_COUPON = "createCoupon",
}

export enum BASE_TABLE_HEAD {
  NOME = "Nome",
  STATUS = "Status",
  CRIADO = "Criado",
  ACOES = "Ações",
}

export const HEAD_TABLE_COUPONS = {
  ...BASE_TABLE_HEAD,
  CODIGO: "Código",
  DESCRICAO: "Descrição",
  LIMITE_USO: "Limite Usos",
  QTD_DIAS: "Qtd Dias",
  VALIDADE: "Validade",
} as const;

export const HEAD_TABLE_USERS = {
  ...BASE_TABLE_HEAD,
  EMAIL: "Email",
  IMAGEM: "Imagem",
  TIPO: "Tipo",
} as const;
