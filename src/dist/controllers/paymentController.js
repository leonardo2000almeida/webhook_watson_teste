"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const valorMonetario_1 = __importDefault(require("../utils/valorMonetario"));
const finalizaPedido_1 = __importDefault(require("../utils/finalizaPedido"));
const finalizaPedidoHelper = new finalizaPedido_1.default();
class PaymentController {
    constructor() {
        this.paymentCalc = (req, res) => {
            var _a;
            const context = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.contexto;
            const pedido = {
                carboidratos: context.carboidrato_selecionado,
                proteina: context.proteina_selecionada,
                salada: context.salada_selecionada,
            };
            const totalApagar = finalizaPedidoHelper.calculaPedido(pedido);
            let confirmaPedido = finalizaPedidoHelper.criarPedido(context);
            return {
                response: {
                    total: totalApagar,
                    valorParaConfirmacao: `R$ ${(0, valorMonetario_1.default)(totalApagar)}`,
                    pedido: confirmaPedido,
                },
                status: 200,
            };
        };
    }
}
exports.default = PaymentController;
