"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookTypes = void 0;
const paymentController_1 = __importDefault(require("../controllers/paymentController"));
const paymentController = new paymentController_1.default();
exports.webhookTypes = {
    calcular_pedido: paymentController.paymentCalc,
    consulta_cep: paymentController.consultaCep
};
