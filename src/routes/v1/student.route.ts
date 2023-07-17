import express from "express";

const router = express.Router();

import studentController from "../../controllers/student.controller";

router
  .route("/")
  .get(studentController.getStudents)
  .post(studentController.addStudents)
  .put(studentController.updateStudents);

router.route("/byEmail/:email").get(studentController.getStudentsByEmail);

export default router;
