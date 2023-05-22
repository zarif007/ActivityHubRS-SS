import { Request, Response, NextFunction } from "express";
import {
  getRegistrationsByActivityIdService,
  getRegistrationByStudentIdService,
  getRegistrationsService,
  addRegistrationService,
} from "../services/activityRegistration.service";
import {
  bookSeatByActivityStateIdService,
  getActivityStateByActivityIdService,
} from "../services/activityState.service";
import { getStudentByIdService } from "../services/student.services";
import { sendSms } from "../services/sms.service";
import { ActivityInterface } from "../types/activity";

const getRegistrations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query;
    const registrations = await getRegistrationsService(query);
    res.status(200).json({
      success: true,
      data: registrations,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting registrations",
    });
  }
};

const getRegistrationByStudentId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const registration = await getRegistrationByStudentIdService(studentId);
    res.status(200).json({
      success: true,
      data: registration,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting registrations",
    });
  }
};

const getRegistrationsByActivityId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { activityId } = req.params;
    const registrations = await getRegistrationsByActivityIdService(activityId);
    res.status(200).json({
      success: true,
      data: registrations,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting registrations",
    });
  }
};

const addRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {activityId, studentId,studentName,newPhoneNumber} = req.body;
    

    // Fetching activity state for seat status
    const activityState = await getActivityStateByActivityIdService(activityId);

    // Checking if there is available seats in this activity
    if (activityState) {
      if (activityState.totalSeat <= activityState.bookedSeat) {
        res.status(400).json({
          success: false,
          message: "No more seats available for this activity",
        });
        return;
      }
      /*
        Try/Catch for checking if this email enrolled to an activity or not
        It saves one extra API call
      */
      try {
        // Inserting registration to DB
        const result = await addRegistrationService({activityId, studentId});
        // Incrementing booked seat
        await bookSeatByActivityStateIdService(activityState._id.toHexString());

        // Sending sms to student
        
        const smsResponse:any = await sendSms(
          newPhoneNumber,
          `${studentName} has been successfully registered to ${activityState.activityId.name} activity`
        );
        
        res.status(200).json({
          success: true,
          data: {smsResponse}
        });
      } catch (err: any) {
        res.status(400).json({
          success: false,
          err: err.message,
          message: "User with this email already enrolled to an activity",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "No activity found",
      });
      return;
    }
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Adding Registration",
    });
  }
};

export default {
  getRegistrationByStudentId,
  getRegistrations,
  getRegistrationsByActivityId,
  addRegistration,
};
