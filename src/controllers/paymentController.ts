import { Request, Response } from "express";
import mascaraMoeda from "../utils/valorMonetario";
import produtos from "../model/produtos.json";
import { criarPedido, calculaSalada } from "../utils/finalizaPedido";

export default class PaymentController {
  constructor() {}

  paymentCalc = (req: Request, res: Response) => {
    const context = req?.body?.contexto;

    const proteina = produtos.Proteinas[context.proteina_selecionada] || 0;
    const carboidratos = produtos.Carboidrato[context.carboidrato_selecionado] || 0;

    const salada = calculaSalada(context.salada_selecionada);
    const totalApagar = proteina + carboidratos + salada;

    let confirmaPedido = criarPedido({
      proteina: `${context.proteina_selecionada} ${context.modo_preparo_proteina}`,
      carboidratos: `${context.carboidrato_selecionado} ${context.modo_preparo_carboidrato}`,
      salada: context.salada_selecionada,
    });

    return {
      response: {
        total: totalApagar,
        valorParaConfirmacao: `R$ ${mascaraMoeda(totalApagar)}`,
        pedido: confirmaPedido,
      },
      status: 200,
    };
  };
}
