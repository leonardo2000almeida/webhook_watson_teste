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
Object.defineProperty(exports, "__esModule", { value: true });
exports.selector = void 0;
const response_1 = require("../utils/response");
const webhookTypes_1 = require("../utils/webhookTypes");
const selector = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const type = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.tipo;
    const response = webhookTypes_1.webhookTypes[type] === undefined ? response_1.notFound : webhookTypes_1.webhookTypes[type];
    return res.json(yield response(req, res));
});
exports.selector = selector;
