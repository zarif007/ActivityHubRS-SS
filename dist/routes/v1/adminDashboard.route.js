"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const adminDashboard_controller_1 = __importDefault(require("../../controllers/adminDashboard.controller"));
router
    .route("/")
    .get(adminDashboard_controller_1.default.getAdminDashboard)
    .post(adminDashboard_controller_1.default.addAdminDashboard)
    .put(adminDashboard_controller_1.default.updateAdminDashboard);
exports.default = router;
