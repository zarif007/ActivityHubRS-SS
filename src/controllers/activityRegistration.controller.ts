import { Request, Response, NextFunction } from "express";
import {
  getRegistrationsByActivityIdService,
  getRegistrationByStudentIdService,
  getRegistrationsService,
  addRegistrationService,
  downloadRegistrationsService,
} from "../services/activityRegistration.service";
import {
  bookSeatByActivityStateIdService,
  getActivityStateByActivityIdService,
} from "../services/activityState.service";
import {
  getStudentByIdService,
  updateStudentById,
} from "../services/student.services";
import { sendSms } from "../services/sms.service";
import { ActivityInterface } from "../types/activity";

import exceljs from "exceljs";

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
const downloadRegistrations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const registrations = await downloadRegistrationsService();

    // res.status(200).json({registrations});
    // return ;
    const workbook = new exceljs.Workbook();
    const headers = [
      { header: "SL", key: "sl", width: 5 },
      { header: "Name", key: "name", width: 35 },
      { header: "ID", key: "studentId", width: 12 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone Number", key: "phoneNumber", width: 15 },
      { header: "Bng Section", key: "bngSection", width: 15 },
    ];

    registrations.map((registration: any) => {
      const worksheet = workbook.addWorksheet(registration.activity);
      worksheet.columns = headers;
      const headerRow = worksheet.getRow(1);
      headerRow.font = { bold: true, size: 12 };
      headerRow.alignment = { vertical: "middle", horizontal: "center" };

      worksheet.addRows(registration.students);
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${"Activity Registration.xlsx"}`
    );
    await workbook.xlsx.write(res);
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
    const { activityId, studentId, newPhoneNumber } = req.body;

    // Fetching activity state for seat status
    const activityState = await getActivityStateByActivityIdService(activityId);

    // Checking if there is available seats in this activity
    if (activityState) {
      if (activityState.totalSeat <= activityState.bookedSeat) {
        res.status(400).json({
          success: false,
          message: "No more seat available for this activity",
        });
        return;
      }

      const student = await getStudentByIdService(studentId);
      const validGender = activityState.activityId.remarks.gender;
      if (!student) {
        res.status(400).json({
          success: false,
          message: "Student not found in this email",
        });
        return;
      } else if (validGender != "Both" && validGender != student.gender) {
        res.status(400).json({
          success: false,
          message: `This activity is only available for ${validGender}`,
        });
        return;
      }

      /*
          Try/Catch for checking if this email enrolled to an activity or not
          It saves one extra API call
        */
      try {
        // Inserting registration to DB
        await addRegistrationService({ activityId, studentId });
        // Incrementing booked seat
        await bookSeatByActivityStateIdService(activityState._id.toHexString());
        // Updating phone number 
        await updateStudentById(studentId, { phoneNumber: newPhoneNumber });

        // Sending sms to student
        const smsResponse: any = await sendSms(
          newPhoneNumber,
          `${student.name} has been successfully enrolled into ${activityState.activityId.name} activity. `
        );

        res.status(200).json({
          success: true,
          data: { smsResponse },
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
  downloadRegistrations,
};
