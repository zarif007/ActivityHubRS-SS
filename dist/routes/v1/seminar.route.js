"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const seminar_controller_1 = __importDefault(require("../../controllers/seminar.controller"));
const router = express_1.default.Router();
router
    .route("/")
    .get(seminar_controller_1.default.getSeminar)
    .post(seminar_controller_1.default.addSeminar);
exports.default = router;
