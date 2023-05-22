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
        required: true
    },
    keySpeaker: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    venue: {
        type: String,
        default: 'Shalla'
    },
    details: {
        type: String,
        default: 'To Be Announced'
    },
    date: {
        type: String,
        default: 'To Be Announced'
    },
    registeredStudents: []
}, {
    timestamps: true
});
exports.SeminarModel = mongoose_1.default.model("Seminar", SeminarSchema);
