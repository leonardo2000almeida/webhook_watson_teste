import { pedido, context} from "./../types/responseTypes";
import { Request, Response } from "express";
import mascaraMoeda from "../utils/valorMonetario";
import produtos from "../model/produtos.json";
import FinalizaPeidido from "../utils/finalizaPedido";

const finalizaPedidoHelper = new FinalizaPeidido();

export default class PaymentController {
  constructor() {}

  paymentCalc = (req: Request, res: Response) => {
    const context: context = req?.body?.contexto;

    const pedido: pedido = {
      carboidratos: context.carboidrato_selecionado,
      proteina: context.proteina_selecionada,
      salada: context.salada_selecionada,
    };

    const totalApagar = finalizaPedidoHelper.calculaPedido(pedido);

    let confirmaPedido = finalizaPedidoHelper.criarPedido(context);

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
