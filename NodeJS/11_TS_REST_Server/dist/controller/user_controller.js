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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../model/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 10, offset = 0 } = req.query;
    const users = yield user_1.default.findAll({ limit: Number(limit), offset: Number(offset) });
    res.status(200).json({ users });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user)
        return res.status(404).json({ msg: `User with ID: ${id} is not in the DB` });
    res.status(200).json({ user });
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const user = yield user_1.default.create({ name, email, state: 1 });
        res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(`Error`);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email } = req.body;
    if (!name && !email)
        return res.status(400).json({ msg: `The data sent is equal to the data in the DB` });
    const user = yield user_1.default.findByPk(id);
    if (!user)
        return res.status(404).json({ msg: `User with ID: ${id} is not in the DB` });
    if (name !== user.getDataValue('name'))
        user.set({ name });
    if (email)
        user.set({ email });
    yield user.save();
    res.status(200).json({ msg: 'User updated', user });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user)
        return res.status(404).json({ msg: `User with ID: ${id} is not in the DB` });
    if (!user.getDataValue('state'))
        return res.status(400).json({ msg: 'That user is already inactive' });
    user.set({ state: false });
    yield user.save();
    res.status(200).json({ msg: 'User deleted', user });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user_controller.js.map