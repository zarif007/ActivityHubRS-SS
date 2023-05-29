import mongoose from "mongoose";
import { StudentInterface } from "../types/student";

const StudentSchema = new mongoose.Schema<StudentInterface>({
    studentId: {
        type: String,
        required: [true, "Student id is required"],
        trim: true,
        unique: true,
        maxlength: [8, "Student ID must be 8 characters long"],
        minlength: [8, "Student ID must be 8 characters long"]
    },
    name: {
        type: String,
        required: [true, "Student name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Student email is required"],
        trim: true,
    },
    gender: {
        type: String,
    },
    department: {
        type: String,
    },
    roomNumber: {
        type: String,
    },
    semester: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    bngSection: {
        type: String,
    },
    engSection: {
        type: String,
        default: ""
    },

}, {
    timestamps: true
});


export const StudentModel =  mongoose.model("Student", StudentSchema);

