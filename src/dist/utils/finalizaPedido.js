"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_json_1 = __importDefault(require("../model/produtos.json"));
class FinalizaPedidoHelper {
    constructor() {
        this.criarPedido = (payload) => {
            let response = "";
            const { carboidrato_selecionado, modo_preparo_carboidrato, modo_preparo_proteina, proteina_selecionada, salada_selecionada, } = payload;
            if (proteina_selecionada && modo_preparo_proteina)
                response += `${proteina_selecionada} ${modo_preparo_proteina}, `;
            else if (proteina_selecionada)
                response += `${proteina_selecionada} ,`;
            if (carboidrato_selecionado && modo_preparo_carboidrato)
                response += `${carboidrato_selecionado} ${modo_preparo_carboidrato}, `;
            else if (carboidrato_selecionado)
                response += `${carboidrato_selecionado} ,`;
            if (salada_selecionada)
                salada_selecionada.map((ingrediente) => (response += `${ingrediente}, `));
            return response.substring(0, response.length - 2);
        };
        this.calculaPedido = (ingredientesSelecionados) => {
            const { carboidratos, proteina, salada } = ingredientesSelecionados;
            let precoSalada = 0;
            let precoProteina = 0;
            let precoCarboidrato = 0;
            if (salada)
                precoSalada = this.calculaSalada(salada);
            if (carboidratos)
                precoCarboidrato = produtos_json_1.default.Carboidrato[carboidratos.toLowerCase()];
            if (proteina)
                precoProteina = produtos_json_1.default.Proteinas[proteina.toLowerCase()];
            return precoSalada + precoCarboidrato + precoProteina;
        };
        this.calculaSalada = (payload) => {
            let total = 0;
            payload.map((salada) => (total += produtos_json_1.default.Saladas[salada.toLowerCase()]));
            return total;
        };
    }
}
exports.default = FinalizaPedidoHelper;
