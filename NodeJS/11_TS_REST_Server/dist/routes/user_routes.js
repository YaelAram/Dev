"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const check_errors_1 = __importDefault(require("../middlewares/check_errors"));
const user_controller_1 = require("../controller/user_controller");
const exists_on_db_1 = require("../database/exists_on_db");
const router = (0, express_1.Router)();
router.get('/', [
    (0, express_validator_1.check)('limit').optional({ nullable: true }).isInt({ min: 1 }).withMessage('limit have to be greater than 0'),
    (0, express_validator_1.check)('offset').optional({ nullable: true }).isInt({ min: 1 }).withMessage('limit have to be greater than 0'),
    check_errors_1.default
], user_controller_1.getUsers);
router.get('/:id', [
    (0, express_validator_1.check)('id').isInt({ min: 1 }).withMessage('limit have to be greater than 0'),
    check_errors_1.default
], user_controller_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('name').notEmpty().withMessage('name is required'),
    (0, express_validator_1.check)('name').isAlpha('en-US', { ignore: " " }).withMessage('Only alpha characters are allowed'),
    (0, express_validator_1.check)('email').notEmpty().withMessage('email is required'),
    (0, express_validator_1.check)('email').isEmail().withMessage('Wrong format for an email'),
    (0, express_validator_1.check)('email').custom(exists_on_db_1.existsUserByEmail),
    check_errors_1.default
], user_controller_1.createUser);
router.put('/:id', [
    (0, express_validator_1.check)('id').isInt({ min: 1 }).withMessage('limit have to be greater than 0'),
    (0, express_validator_1.check)('name').optional({ nullable: true }).notEmpty().withMessage('name is required'),
    (0, express_validator_1.check)('name').optional({ nullable: true }).isAlpha('en-US', { ignore: " " }).withMessage('Only alpha characters are allowed'),
    (0, express_validator_1.check)('email').optional({ nullable: true }).notEmpty().withMessage('email is required'),
    (0, express_validator_1.check)('email').optional({ nullable: true }).isEmail().withMessage('Wrong format for an email'),
    (0, express_validator_1.check)('email').optional({ nullable: true }).custom(exists_on_db_1.existsUserByEmail),
    check_errors_1.default
], user_controller_1.updateUser);
router.delete('/:id', [
    (0, express_validator_1.check)('id').isInt({ min: 1 }).withMessage('limit have to be greater than 0'),
    check_errors_1.default
], user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user_routes.js.map