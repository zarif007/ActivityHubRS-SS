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
exports.addAdminDashboardService = exports.updateAdminDashboardService = exports.getAdminDashboardService = void 0;
const adminDashboard_model_1 = require("../models/adminDashboard.model");
const getAdminDashboardService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const adminDashboard = yield adminDashboard_model_1.AdminDashboardModel.find(query);
    return adminDashboard;
});
exports.getAdminDashboardService = getAdminDashboardService;
// Multiple activity insertion
const updateAdminDashboardService = (session, updateInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield adminDashboard_model_1.AdminDashboardModel.findOneAndUpdate({ session }, updateInfo, { new: true });
    return result;
});
exports.updateAdminDashboardService = updateAdminDashboardService;
const addAdminDashboardService = (adminDashboard) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield adminDashboard_model_1.AdminDashboardModel.create(adminDashboard);
    return result;
});
exports.addAdminDashboardService = addAdminDashboardService;
