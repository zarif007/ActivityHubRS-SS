import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema({
    shortName: {
        type: String,
        default: "",
        // required: [true, "Instructor's shortName is required"],
    },
    fullName: {
        type: String,
        default: "",
        // required: [true, "Instructor's fullName is required"],
    },
    phoneNumber: {
        type: String,
        default: "+880**********",
    },
    email: {
        type: String,
        default: "",
        // required: [true, "Instructor's email is required"],
    },
    gender: {
        type: String,
        default: ""
    }, 
    details: {
        type: String,
        default: "No details provided",
        // minlength: [10, "Must be at least 10 characters long"],
        // maxlength: [300, "Can be at max 300 characters long"],
    },
    image: {
        type: String,
        default: "https://www.freepik.com/free-vector/illustration-user-avatar-icon_2606572.htm#query=default%20user&position=0&from_view=search&track=ais",
    },
    // We should add a field to keep track, if the instructor is from bracU or not
}, {
    timestamps: true
});


export const InstructorModel =  mongoose.model("Instructor", InstructorSchema);

