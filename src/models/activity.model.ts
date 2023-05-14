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
      required: [true, "Image is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Must be at least 10 characters long"],
      maxlength: [500, "Can be at max 500 characters long"],
    },
    day: {
      type: String,
    },
    classTime: {
      type: String,
    },
    venue: {
      type: String,
    },
    ds: {
      type: String,
    },
    instructor: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const ActivityModel = mongoose.model("Activity", ActivitySchema);
