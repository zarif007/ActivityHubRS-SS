import express from "express";

const router = express.Router();

import ActivityRegistrationController from "../../controllers/activityRegistration.controller";

router
  .route("/")
  .get(ActivityRegistrationController.getRegistrations)
  .post(ActivityRegistrationController.addRegistration);

router
  .route("/byStudentId/:studentId")
  .get(ActivityRegistrationController.getRegistrationByStudentId);

router
  .route("/byActivityId/:activityId")
  .get(ActivityRegistrationController.getRegistrationsByActivityId);

export default router;
