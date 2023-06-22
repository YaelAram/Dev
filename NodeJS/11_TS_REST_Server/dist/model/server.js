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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("../routes/user_routes"));
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    constructor() {
        var _a;
        this.app = (0, express_1.default)();
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '8080';
        // Routes
        this.userRoutes = '/api/user';
        // DB connection
        this.connectToDB();
        // Middlewares
        this.middlewares();
        // Router
        this.routes();
        this.listen();
    }
    connectToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('DataBase connected');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Body read ( get data for any request )
        this.app.use(express_1.default.json());
        // Public Directory
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.userRoutes, user_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => console.log(`Listening at PORT: ${this.port}`));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map