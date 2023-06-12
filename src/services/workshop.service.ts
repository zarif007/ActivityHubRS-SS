import { ObjectId } from "mongodb";
import { WorkshopModel } from "../models/workshop.model";
import { convertToObjectId } from "../utils/utility";
import { WorkshopInterface } from "../types/workshop";

const getWorkshopService = async (query: Object) => {
  const workshops = await WorkshopModel.find(query);
  return workshops;
};

const addWorkshopService = async (seminar: Object) => {
  const result = await WorkshopModel.create(seminar);
  return result;
};



const registerStudentToWorkshopService = async (
  workshopId: string,
  studentId: string
) => {
  const workshop = await WorkshopModel.findById(workshopId);
  if (!workshop) {
    return "Workshop not found";
  }
  if (workshop.registeredStudents.includes(studentId)) {
    return "Student already registered";
  }
  if (workshop.registeredStudents.length === workshop.seatLimit) {
    return "No seat available for this workshop";
  }
  workshop.registeredStudents.push(studentId);
  const result = await workshop.save();
  return result;
};

export {
  getWorkshopService,
  addWorkshopService,
  registerStudentToWorkshopService,
};
