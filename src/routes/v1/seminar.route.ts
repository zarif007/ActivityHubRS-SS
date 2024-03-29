import express from "express";
import seminarController from "../../controllers/seminar.controller";

const router = express.Router();

router
  .route("/")
  .get(seminarController.getSeminar)
  .post(seminarController.addSeminar);

export default router;
