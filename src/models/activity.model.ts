import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Activity name is required"],
      trim: true,
    },
    image: {
      type: String,
      default:"https://i.ibb.co/D8hjBqB/5.png"
      // required: [true, "Image is required"],
    },
    description: {
      type: String,
      default: "No description provided",
      // required: [true, "Description is required"],
      // minlength: [10, "Must be at least 10 characters long"],
      // maxlength: [500, "Can be at max 500 characters long"],
    },
    level: {
      type: String,
      default: "Beginner",      
    },
    price: {
      type: Number,
      default: 1000,
      required: [true, "Price is required"],
    },
    remarks: {
      gender:{
        type: String,
        default: "Both",
        enum: ["Male", "Female", "Both"],
      }
    },
    day: {
      type: String,
      default: "",
    },
    classTime: {
      type: String,
      default: "Will be announced later",
    },
    venue: {
      type: String,
      default: "Will be announced later",
    },
    ds: {
      type: String,
      default: "",
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Instructor',
    },
  },
  {
    timestamps: true,
  }
);

export const ActivityModel = mongoose.model("Activity", ActivitySchema);
