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
    paymentStatus: {
      type: String,
      default: "Unpaid",
      enum: ["Paid", "Unpaid", "Hold"],
    },
    session: {
      type: String,
      default: "Summer2023",
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
