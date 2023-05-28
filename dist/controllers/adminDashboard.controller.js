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
Object.defineProperty(exports, "__esModule", { value: true });
const adminDashboard_service_1 = require("../services/adminDashboard.service");
const getAdminDashboard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const adminDashboard = yield (0, adminDashboard_service_1.getAdminDashboardService)(query);
        res.status(200).json({
            success: true,
            data: adminDashboard
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting Admin Dashboard"
        });
    }
});
const addAdminDashboard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { adminDashboard } = req.body;
        const result = yield (0, adminDashboard_service_1.addAdminDashboardService)(adminDashboard);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in adding new Admin Dashboard"
        });
    }
});
const updateAdminDashboard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { session } = req.query;
        const { adminDashboard } = req.body;
        const result = yield (0, adminDashboard_service_1.updateAdminDashboardService)(session, adminDashboard);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Updating new adminDashboard"
        });
    }
});
exports.default = {
    addAdminDashboard,
    getAdminDashboard,
    updateAdminDashboard,
};
