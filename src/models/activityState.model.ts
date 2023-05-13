import mongoose from "mongoose";

const ActivityStateSchema = new mongoose.Schema({
    activityId: {
        type: String,
        required: [true, "Activity id is required"],
        trim: true,
    },
    session: {
        type: String,
        required: [true, "Session is required"],
    },
    totalSeat: {
        type: Number,
        required: [true, "Total seat number is required"],
        min: [0, "Seat number can not be less than 0"],
        max: [80, "Seat number can not be more than 80"],
    },
    bookedSeat: {
        type: Number,
        required: [true, "booked seat number is required"],
        min: [0, "Seat number can not be less than 0"],
        max: [80, "Seat number can not be more than 80"],
    },
}, {
    timestamps: true
});


export const ActivityModel =  mongoose.model("ActivityState", ActivityStateSchema);

