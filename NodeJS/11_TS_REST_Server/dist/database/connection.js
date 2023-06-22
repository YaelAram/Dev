"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connect = new sequelize_1.Sequelize('node', 'root', 'n0m3l0', {
    host: '192.168.1.73',
    dialect: 'mysql'
});
exports.default = connect;
//# sourceMappingURL=connection.js.map