import mongoose from "mongoose";

const SeminarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    keySpeaker: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    venue: {
      type: String,
      default: "Shalla",
    },
    details: {
      type: String,
      default: "To Be Announced",
    },
    seatLimit: {
      type: Number,
      default: 1600,
    },
    date: {
      type: String,
      default: "To Be Announced",
    },
    registeredStudents: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
export const SeminarModel = mongoose.model("Seminar", SeminarSchema);
