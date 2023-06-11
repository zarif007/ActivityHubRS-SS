import express from "express";
import workshopController from "../../controllers/workshop.controller";

const router = express.Router();

router
  .route("/")
  .get(workshopController.getWorkshop)
  .post(workshopController.addWorkshop);

export default router;
