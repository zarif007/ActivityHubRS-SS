"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeminarModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const SeminarSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    keySpeaker: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    venue: {
        type: String,
        default: "Shalla",
    },
    details: {
        type: String,
        default: "To Be Announced",
    },
    seatLimit: {
        type: Number,
        default: 1600,
    },
    date: {
        type: String,
        default: "To Be Announced",
    },
    registeredStudents: {
        type: [String],
        default: [],
    },
    slot: {
        type: Number,
        default: 1,
    },
    type: {
        type: String,
        default: "mandatory",
    },
    time: {
        type: String,
        default: "To Be Announced",
    },
}, {
    timestamps: true,
});
exports.SeminarModel = mongoose_1.default.model("Seminar", SeminarSchema);
