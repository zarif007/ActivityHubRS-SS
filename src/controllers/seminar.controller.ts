import {
  addSeminarService,
  getSeminarRegistrationService,
  getSeminarService,
  registerStudentToSeminarService,
} from "../services/seminar.service";
import { Request, Response, NextFunction } from "express";

const getSeminar = async (req: Request, res: Response) => {
  try {
    const { _id } = req.query;
    const seminar = await getSeminarService(_id ? { _id } : {});
    res.status(200).json({
      success: true,
      data: seminar,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting seminars",
    });
  }
};
const getSeminarById  = async (req: Request, res: Response) => {
  try {
    const { seminarId } = req.params;
    const seminar = await getSeminarRegistrationService(seminarId);
    res.status(200).json({
      success: true,
      data: seminar,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting seminars",
    });
  }
};

const addSeminar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const seminar = req.body;
    const result = await addSeminarService(seminar);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Adding new seminar",
    });
  }
};

const registerStudentToSeminar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { seminarId } = req.params;
    const { studentId } = req.body;

    // Register student
    const result: any = await registerStudentToSeminarService(
      seminarId,
      studentId
    );
    if (typeof result === "string") {
      res.status(400).json({
        success: false,
        err: result,
        message: result,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Registering to this seminar",
    });
  }
};

export default { getSeminar, addSeminar, registerStudentToSeminar, getSeminarById };
