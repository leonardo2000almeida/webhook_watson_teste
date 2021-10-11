"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const valor_monetario_1 = __importDefault(require("../utils/valor_monetario"));
class PaymentController {
    constructor() {
        this.paymentCalc = (req, res) => {
            const total = 0;
            return { total: (0, valor_monetario_1.default)(total) };
        };
    }
}
exports.default = PaymentController;
