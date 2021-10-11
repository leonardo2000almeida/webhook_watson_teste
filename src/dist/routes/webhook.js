"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const morgan_1 = __importDefault(require("morgan"));
const selectorMiddleware_1 = require("../middleware/selectorMiddleware");
const router = (0, express_1.Router)();
exports.router = router;
router.use((0, express_1.json)({}));
router.use((0, express_1.urlencoded)({ extended: true }));
router.use((0, morgan_1.default)("tiny"));
router.post("/", selectorMiddleware_1.selector);
