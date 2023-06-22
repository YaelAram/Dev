"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 8080;
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(PORT, function () { return console.log("Listening at  http://localhost:".concat(PORT)); });
