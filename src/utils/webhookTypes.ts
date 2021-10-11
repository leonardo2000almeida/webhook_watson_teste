import PaymentController from "../controllers/paymentController";

const paymentController = new PaymentController();

export const webhookTypes = {
  calcular_pedido: paymentController.paymentCalc,
  consulta_cep: paymentController.consultaCep
};
