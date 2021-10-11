export type notFound = {
  response: string;
  status: number;
};

export type context = {
  proteina_selecionada: string;
  carboidrato_selecionado: string;
  salada_selecionada: [string];
  modo_preparo_proteina: string;
  modo_preparo_carboidrato: string;
};

export type pedido = {
  proteina: string;
  carboidratos: string;
  salada: [string];
};

export type cepReturn = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: "";
  ddd: string;
  siafi: string;
};
