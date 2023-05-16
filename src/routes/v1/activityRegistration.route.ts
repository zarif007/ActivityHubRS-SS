import express from "express";

const router = express.Router();

import ActivityRegistrationController from "../../controllers/activityRegistration.controller";

router
  .route("/")
  .get(ActivityRegistrationController.getRegistrations)
  .post(ActivityRegistrationController.addRegistration);

router
  .route("/studentId")
  .get(ActivityRegistrationController.getRegistrationByStudentId);

router
  .route("/activityId")
  .get(ActivityRegistrationController.getRegistrationsByActivityId);

export default router;
