import { Request, Response, NextFunction } from "express";
import { getRegistrationsByActivityIdService, getRegistrationByStudentIdService, getRegistrationsService, addRegistrationService } from "../services/activityRegistration.service";
import { bookSeatByActivityStateIdService, getActivityStateByActivityIdService} from "../services/activityState.service";

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

const addRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const registration = req.body;
    const { activityId } = registration;
    const activityState = await getActivityStateByActivityIdService(activityId);
    if(activityState){
      if(activityState.totalSeat<=activityState.bookedSeat){
        res.status(400).json({
          success: false,
          message: "No more seats available for this activity",
        });
        return;
      }
      
      const activity = await bookSeatByActivityStateIdService(activityState._id.toHexString());
      console.log(activity);
      const result = await addRegistrationService(registration);
      res.status(200).json({
        success: true,
        data: result,
      });

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
}
