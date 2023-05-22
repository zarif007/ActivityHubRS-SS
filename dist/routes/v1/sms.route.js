"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const sms_controller_1 = __importDefault(require("../../controllers/sms.controller"));
router
    .route("/send")
    .post(sms_controller_1.default.sendRegistrationSms);
exports.default = router;
