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
