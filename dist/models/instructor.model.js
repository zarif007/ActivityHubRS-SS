"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const InstructorSchema = new mongoose_1.default.Schema({
    shortName: {
        type: String,
        default: "",
        // required: [true, "Instructor's shortName is required"],
    },
    fullName: {
        type: String,
        default: "",
        // required: [true, "Instructor's fullName is required"],
    },
    phoneNumber: {
        type: String,
        default: "+880**********",
    },
    email: {
        type: String,
        default: "",
        // required: [true, "Instructor's email is required"],
    },
    gender: {
        type: String,
        default: ""
    },
    details: {
        type: String,
        default: "No details provided",
        // minlength: [10, "Must be at least 10 characters long"],
        // maxlength: [300, "Can be at max 300 characters long"],
    },
    image: {
        type: String,
        default: "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg",
    },
    // We should add a field to keep track, if the instructor is from bracU or not
}, {
    timestamps: true
});
exports.InstructorModel = mongoose_1.default.model("Instructor", InstructorSchema);
