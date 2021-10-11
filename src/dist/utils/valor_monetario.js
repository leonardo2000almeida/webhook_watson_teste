"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mascara_moeda(valor_formatado) {
    try {
        let value = valor_formatado.toFixed(2).toString();
        value = value.replace(/\D/g, ""); // permite digitar apenas numero
        value = value.replace(/(\d{1})(\d{20})$/, "$1.$2"); // coloca ponto antes dos ultimos 20 digitos
        value = value.replace(/(\d{1})(\d{17})$/, "$1.$2"); // coloca ponto antes dos ultimos 17 digitos
        value = value.replace(/(\d{1})(\d{14})$/, "$1.$2"); // coloca ponto antes dos ultimos 14 digitos
        value = value.replace(/(\d{1})(\d{11})$/, "$1.$2"); // coloca ponto antes dos ultimos 11 digitos
        value = value.replace(/(\d{1})(\d{8})$/, "$1.$2"); // coloca ponto antes dos ultimos 8 digitos
        value = value.replace(/(\d{1})(\d{5})$/, "$1.$2"); // coloca ponto antes dos ultimos 5 digitos
        value = value.replace(/(\d{1})(\d{1,2})$/, "$1,$2"); // coloca virgula antes dos ultimos 2 digitos
        return value;
    }
    catch (error) {
        throw error;
    }
}
exports.default = mascara_moeda;
