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
    slot: {
      type: Number,
      default: 1,
    },
    type:{
      type: String,
      default: "mandatory",
    },
    time: {
      type: String,
      default: "To Be Announced",
    },
  },
  {
    timestamps: true,
  }
);
export const SeminarModel = mongoose.model("Seminar", SeminarSchema);
