import express from "express";

const router = express.Router();

import ActivityRegistrationController from "../../controllers/activityRegistration.controller";
import ActivityStateController from "../../controllers/activityState.controller";
router
  .route("/")
  .get(ActivityRegistrationController.getRegistrations)
  .post(ActivityRegistrationController.addRegistration);

router
  .route("/checkStatus")
  .get(ActivityStateController.checkActivityStatus);
  
router
  .route("/export")
  .get(ActivityRegistrationController.downloadRegistrations);

router
  .route("/byStudentId/:studentId")
  .get(ActivityRegistrationController.getRegistrationByStudentId);

router
  .route("/byActivityId/:activityId")
  .get(ActivityRegistrationController.getRegistrationsByActivityId);

export default router;
