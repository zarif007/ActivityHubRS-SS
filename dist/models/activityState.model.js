"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityStateModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ActivityStateSchema = new mongoose_1.default.Schema({
    activityId: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Activity',
        required: [true, "Activity id is required"],
        trim: true,
    },
    session: {
        type: String,
        default: "Summer2023",
    },
    totalSeat: {
        type: Number,
        required: [true, "Total seat number is required"],
        min: [0, "Seat number can not be less than 0"],
    },
    bookedSeat: {
        type: Number,
        default: 0,
        min: [0, "Seat number can not be less than 0"],
        max: [80, "Seat number can not be more than 80"],
    },
    registrationDay: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});
exports.ActivityStateModel = mongoose_1.default.model("ActivityState", ActivityStateSchema);
