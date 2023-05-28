
import express from "express";

const router = express.Router();

import AdminDashboard from "../../controllers/adminDashboard.controller";

router
  .route("/")
  .get(AdminDashboard.getAdminDashboard)
  .post(AdminDashboard.addAdminDashboard)
  .put(AdminDashboard.updateAdminDashboard);




export default router;
