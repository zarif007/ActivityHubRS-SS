"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDashboardModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AdminDashboardSchema = new mongoose_1.default.Schema({
    isRegistrationOpen: {
        type: Boolean,
        default: false,
    },
    registrationDay: {
        type: Number,
        default: 1
    },
    session: {
        type: String,
        unique: true,
    }
}, {
    timestamps: true,
});
exports.AdminDashboardModel = mongoose_1.default.model("AdminDashboard", AdminDashboardSchema);
