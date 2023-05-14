"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const InstructorSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Instructor's name is required"],
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Instructor's email is required"],
    },
    gender: {
        type: String,
    },
    details: {
        type: String,
        minlength: [10, "Must be at least 10 characters long"],
        maxlength: [300, "Can be at max 300 characters long"],
    }
}, {
    timestamps: true
});
exports.InstructorModel = mongoose_1.default.model("Instructor", InstructorSchema);
