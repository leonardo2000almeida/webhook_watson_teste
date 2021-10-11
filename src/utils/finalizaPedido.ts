import { context, pedido } from "../types/responseTypes";
import produto from "../model/produtos.json";

export default class FinalizaPedidoHelper {
  constructor() {}

  criarPedido = (payload: context): string => {
    let response = "";

    const {
      carboidrato_selecionado,
      modo_preparo_carboidrato,
      modo_preparo_proteina,
      proteina_selecionada,
      salada_selecionada,
    } = payload;

    if (proteina_selecionada && modo_preparo_proteina) 
      response += `${proteina_selecionada} ${modo_preparo_proteina}, `;
    else if(proteina_selecionada)
      response += `${proteina_selecionada} ,`;

    if (carboidrato_selecionado && modo_preparo_carboidrato)
      response += `${carboidrato_selecionado} ${modo_preparo_carboidrato}, `;
    else if(carboidrato_selecionado)
      response += `${carboidrato_selecionado} ,`;

    if (salada_selecionada)
      salada_selecionada.map((ingrediente) => (response += `${ingrediente}, `));
    
    return response.substring(0, response.length - 2);
  };

  calculaPedido = (ingredientesSelecionados: pedido) => {
    const { carboidratos, proteina, salada } = ingredientesSelecionados;

    let precoSalada = 0;
    let precoProteina = 0;
    let precoCarboidrato = 0;

    if (salada) precoSalada = this.calculaSalada(salada);
    if (carboidratos) precoCarboidrato = produto.Carboidrato[carboidratos.toLowerCase()];
    if (proteina) precoProteina = produto.Proteinas[proteina.toLowerCase()];

    return precoSalada + precoCarboidrato + precoProteina;
  };

  calculaSalada = (payload: [string]): number => {
    let total = 0;
    payload.map((salada) => (total += produto.Saladas[salada.toLowerCase()]));

    return total;
  };
}
