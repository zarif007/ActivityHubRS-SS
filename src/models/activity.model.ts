import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
    activityName: {
        type: String,
        required: [true, "Student id is required"],
        trim: true,
        unique: true,
        maxlength: [8, "Student ID must be 8 characters long"],
        minlenght: [8, "Student ID must be 8 characters long"]
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
    depertment: {
        type: String,
    },
    roomNumber: {
        type: String,
        required: [true, "room no is required"],
    },
    semester: {
        type: String,
    },
    phoneNumber: {
        type: String,
        // required: [true, "phone no is required"],
    },
    bngSection: {
        type: String,
        required: [true, "BNG section is required"],
    },
    engSection: {
        type: String,
        // required: [true, "ENG section is required"],
    },

}, {
    timestamps: true
});


export const ActivityModel =  mongoose.model("Student", ActivitySchema);

