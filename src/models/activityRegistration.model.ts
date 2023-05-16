import mongoose from "mongoose";

const ActivityRegistrationSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: [true, "Student's id is required"],
      trim: true,
      unique: true,
    },
    activityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
      required: [true, "Activity is required"],
      trim: true,
    },
    session: {
      type: String,
      required: [true, "Session is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const ActivityRegistrationModel = mongoose.model(
  "ActivityRegistration",
  ActivityRegistrationSchema
);
