import express from "express";

const router = express.Router();

import SmsController from "../../controllers/sms.controller";




router
  .route("/send")
  .post(SmsController.sendRegistrationSms);




export default router;
