import { Request, Response, NextFunction } from "express";
import {
  addStudentsService,
  getStudentsByEmailService,
  getStudentsService,
  updateManyStudentsService,
} from "../services/student.services";

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const students = await getStudentsService();
    console.log(req.ip)
    res.status(200).json({
      success: true,
      data: students,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting students",
    });
  }
};

const getStudentsByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;
    let student = await getStudentsByEmailService(email);
    if (student) {
      const phoneNumber = student.phoneNumber.replace(/(\d{2})\d{5}(\d{4})/, '$1*****$2');
      res.status(200).json({
        success: true,
        data: { ...student.toObject(), phoneNumber },
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: student,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting student",
    });
  }
};
const addStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { students } = req.body;
    const result = await addStudentsService(students);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Adding student",
    });
  }
};

const updateStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { students, updatedQuery } = req.body;
    const result = await updateManyStudentsService(students, updatedQuery);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Updating student",
    });
  }
};

    export default {
      getStudents,
      getStudentsByEmail,
      addStudents,
      updateStudents
    }
