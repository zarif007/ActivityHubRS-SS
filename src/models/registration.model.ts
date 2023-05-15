import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Student',
        required: [true, "Student's email is required"],
        trim: true,
    },
    activityId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Activity',
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


export const RegistrationModel =  mongoose.model("Registration", RegistrationSchema);

