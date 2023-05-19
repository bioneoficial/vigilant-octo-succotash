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
  EDIT_USER = "editUser",
  EDIT_COUPON = "editCoupon",
}

export enum BASE_TABLE_HEAD {
  NOME = "Nome",
  STATUS = "Status",
  CRIADO = "Criado",
}

export const HEAD_TABLE_COUPONS = {
  ...BASE_TABLE_HEAD,
  CODIGO: "Código",
  DESCRICAO: "Descrição",
  LIMITE_USO: "Limite Usos",
  QTD_DIAS: "Qtd Dias",
  VALIDADE: "Validade",
  ACOES: "Ações",
} as const;

export const HEAD_TABLE_USERS = {
  ...BASE_TABLE_HEAD,
  EMAIL: "Email",
  IMAGEM: "Imagem",
  TIPO: "Tipo",
  ACOES: "Ações",
} as const;

export enum UserRole {
  usuario = "Usuário",
  admin = "Admin",
  autor = "Autor",
  root = "Root",
}

export enum HEAD_TABLE_DENOUNCE {
  DENUNCIA_POR = "Denúncia por",
  DENUNCIA = "Denúncia",
  EPISODIO = "Episódio",
  DETALHES = "Detalhes",
  SERIE = "Série",
  AUTOR = "Autor",
  DATA = "Data",
}

export enum GENRES_NAMES {
  SCI_FI = "Sci-fi",
  REVANCHE_ORIGINARIA = "Revanche Originária",
  CONTEUDO_RESTRITO = "Conteúdo Restrito",
  MOLECADA = "Molecada",
  LGBTQI_PLUS = "LGBTQI+",
  TERROR_SOBRENATURAL = "Terror Sobrenatural",
  LENDAS = "Lendas",
  HORROR_TROPICAL = "Horror Tropical",
  LIVRE = "Livre",
  DISTOPIA_LATINA = "Distopia Latina",
  CRIME_MISTERIO =  "Crime e mistério",
  COTIDIANOS_EXTRAORDINARIOS = "Cotidianos Extraordinários"
}
export enum DENOUCE_TYPE {
  CONTEUDO_IMPROPRIO = "Conteúdo ofensivo ou impróprio",
  DIREITOS_AUTORAIS = "Violação de direitos autorais",
  OUTROS = "Outros",
  SPAM = "Spam ou propaganda",
}