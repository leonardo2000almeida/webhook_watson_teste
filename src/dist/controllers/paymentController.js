"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const valorMonetario_1 = __importDefault(require("../utils/valorMonetario"));
const finalizaPedido_1 = __importDefault(require("../utils/finalizaPedido"));
const axios_1 = __importDefault(require("axios"));
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
                    total: (0, valorMonetario_1.default)(totalApagar),
                    valorParaConfirmacao: `R$ ${(0, valorMonetario_1.default)(totalApagar)}`,
                    pedido: confirmaPedido,
                },
                status: 200,
            };
        };
        this.consultaCep = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            let cep = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.cep;
            cep = cep.replace(/\-/, "");
            const request_cep = yield axios_1.default.get(`https://viacep.com.br/ws/${cep}/json/`);
            const request = request_cep.data;
            const userOptions = `${request.logradouro}, ${request.bairro}, ${request.localidade}`;
            return { endereco: request, status: request_cep.status, userOptions };
        });
    }
}
exports.default = PaymentController;
