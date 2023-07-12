"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkshopModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const WorkshopSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    facilitators: {
        type: [String],
        required: true
    },
    image: {
        type: String
    },
    slot: {
        type: Number,
        default: 1,
    },
    venue: {
        type: String,
        default: 'Markuli Hall'
    },
    objective: {
        type: String,
        default: 'To Be Announced'
    },
    date: {
        type: String,
        default: 'To Be Announced'
    },
    time: {
        type: String,
        default: 'To Be Announced'
    },
    seatLimit: {
        type: Number,
        default: 0
    },
    registeredStudents: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});
exports.WorkshopModel = mongoose_1.default.model("Workshop", WorkshopSchema);
