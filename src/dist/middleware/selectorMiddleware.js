"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selector = void 0;
const response_1 = require("../utils/response");
const webhookTypes_1 = require("../utils/webhookTypes");
const selector = (req, res) => {
    var _a;
    const type = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.tipo;
    const response = webhookTypes_1.webhookTypes[type] === undefined ? response_1.notFound : webhookTypes_1.webhookTypes[type];
    return res.json(response());
};
exports.selector = selector;
