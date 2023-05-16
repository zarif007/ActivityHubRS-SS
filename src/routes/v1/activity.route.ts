import express from "express";

const router = express.Router();

import ActivityController from "../../controllers/activity.controller";

router
  .route("/")
  .get(ActivityController.getActivities)
  .post(ActivityController.addActivity);

router
  .route("/:id").get(ActivityController.getActivityById);



export default router;
