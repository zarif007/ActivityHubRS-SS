import express from "express";

const router = express.Router();

import ActivityStateController from "../../controllers/activityState.controller";

router
  .route("/")
  .get(ActivityStateController.getActivityState)
  .post(ActivityStateController.addActivityState);

router
  .route("/:id")
  .get(ActivityStateController.getActivityStateByActivityId)
  .put(ActivityStateController.updateActivityState);


export default router;
