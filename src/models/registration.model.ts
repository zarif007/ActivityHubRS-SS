import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
    studentEmail: {
        type: String,
        required: [true, "Student's email is required"],
        trim: true,
    },
    activityId: {
        type: String,
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


export const ActivityModel =  mongoose.model("Registration", RegistrationSchema);

