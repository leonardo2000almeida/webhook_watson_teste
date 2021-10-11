"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const webhook_1 = require("./routes/webhook");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.json({}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(webhook_1.router);
