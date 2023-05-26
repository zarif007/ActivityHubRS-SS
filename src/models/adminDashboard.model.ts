import mongoose from "mongoose";

const AdminDashboardSchema = new mongoose.Schema(
  {
    isRegistrationOpen: {
      type: Boolean,
      default: false,
    },
    registrationDay: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true,
  }
);

export const AdminDashboardModel = mongoose.model(
  "AdminDashboard",
  AdminDashboardSchema
);
