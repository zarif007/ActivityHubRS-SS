import mongoose from "mongoose";
import { RegistrationInterface } from "../types/registration";

const ActivityRegistrationSchema = new mongoose.Schema<RegistrationInterface>(
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
