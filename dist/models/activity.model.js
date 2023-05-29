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
        default: "https://i.imgur.com/6z2hdx6.png"
        // required: [true, "Image is required"],
    },
    description: {
        type: String,
        default: "No description provided",
        // required: [true, "Description is required"],
        // minlength: [10, "Must be at least 10 characters long"],
        // maxlength: [500, "Can be at max 500 characters long"],
    },
    level: {
        type: String,
        default: "Beginner",
    },
    price: {
        type: Number,
        default: 1000,
        required: [true, "Price is required"],
    },
    remarks: {
        gender: {
            type: String,
            default: "Both",
            enum: ["Male", "Female", "Both"],
        }
    },
    day: {
        type: String,
        default: "",
    },
    classTime: {
        type: String,
        default: "Will be announced later",
    },
    venue: {
        type: String,
        default: "Will be announced later",
    },
    ds: {
        type: String,
        default: "",
    },
    instructor: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Instructor',
    },
    type: {
        type: String,
        default: "General",
        enum: ["General", "Civic"],
    }
}, {
    timestamps: true,
});
exports.ActivityModel = mongoose_1.default.model("Activity", ActivitySchema);
