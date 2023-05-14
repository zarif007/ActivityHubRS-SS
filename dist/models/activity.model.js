"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ActivitySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Activity name is required"],
        trim: true,
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Must be at least 10 characters long"],
        maxlength: [500, "Can be at max 500 characters long"],
    },
    day: {
        type: String,
    },
    classTime: {
        type: String,
    },
    venue: {
        type: String,
    },
    ds: {
        type: String,
    },
    instructor: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.ActivityModel = mongoose_1.default.model("Activity", ActivitySchema);
