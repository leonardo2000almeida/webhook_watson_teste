import { pedido, context, cepReturn } from "./../types/responseTypes";
import { Request, Response } from "express";
import mascaraMoeda from "../utils/valorMonetario";
import FinalizaPeidido from "../utils/finalizaPedido";
import axios from "axios";

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

  consultaCep = async (req: Request, res: Response) => {
    let cep: string = req?.body?.cep;
    cep = cep.replace(/\-/, "");

    const request_cep = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    const request:cepReturn = request_cep.data;

    const userOptions = `${request.logradouro}, ${request.bairro}, ${request.localidade}`;

    return { endereco: request, status:request_cep.status, userOptions };
  };
}
