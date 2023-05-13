"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const RegistrationSchema = new mongoose_1.default.Schema({
    studentEmail: {
        type: String,
        required: [true, "Student's email is required"],
        trim: true,
    },
    activityId: {
        type: String,
        required: [true, "Activity is required"],
        trim: true,
    },
    session: {
        type: String,
        required: [true, "Session is required"],
    },
}, {
    timestamps: true
});
exports.ActivityModel = mongoose_1.default.model("Registration", RegistrationSchema);
