import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Instructor name is required"],
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    gender: {
        type: String,
    }

}, {
    timestamps: true
});


export const InstructorModel =  mongoose.model("Student", InstructorSchema);

