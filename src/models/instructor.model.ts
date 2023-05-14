import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Instructor's name is required"],
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Instructor's email is required"],
    },
    gender: {
        type: String,
    }, 
    details: {
        type: String,
        minlength: [10, "Must be at least 10 characters long"],
        maxlength: [300, "Can be at max 300 characters long"],
    }
}, {
    timestamps: true
});


export const InstructorModel =  mongoose.model("Instructor", InstructorSchema);

