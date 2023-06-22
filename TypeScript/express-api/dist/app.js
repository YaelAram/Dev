"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.get('/', (req, res) => {
    res.status(400).json({
        ok: false,
        msg: 'Token is required'
    });
});
app.listen(PORT, () => console.log(`Listening at  http://localhost:${PORT}`));
