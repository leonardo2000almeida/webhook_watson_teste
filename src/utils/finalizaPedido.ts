import { pedido } from "../types/responseTypes";
import produto from "../model/produtos.json";

export const criarPedido = (payload: pedido): string => {
  const { carboidratos, proteina, salada} = payload;
  let response = "";

  if (!proteina.includes("undefined")) response += `${proteina}, `;
  if (!carboidratos.includes("undefined")) response += `${carboidratos}, `;
  
  
  salada.map((ingrediente, index) => {
    if(salada.length === index + 1)
      response += `${ingrediente} `;
    else
      response += `${ingrediente},`;
  })

  return response ? response : "";
};

export const calculaSalada = (payload: [string]): number => {
  let total = 0;
  payload.map((salada) => total += produto.Saladas[salada]);

  return total;
};
