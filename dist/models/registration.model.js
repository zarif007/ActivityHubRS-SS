"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const RegistrationSchema = new mongoose_1.default.Schema({
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Student',
        required: [true, "Student's email is required"],
        trim: true,
    },
    activityId: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Activity',
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
exports.RegistrationModel = mongoose_1.default.model("Registration", RegistrationSchema);
