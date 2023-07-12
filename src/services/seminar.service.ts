import { SeminarModel } from "../models/seminar.model";

const getSeminarService = async (query: Object) => {
  const seminars = await SeminarModel.find(query);
  return seminars;
};

const addSeminarService = async (seminar: Object) => {
  const result = await SeminarModel.create(seminar);
  return result;
};

const registerStudentToSeminarService = async (
  seminarId: string,
  studentId: string
) => {
  const seminar = await SeminarModel.findById(seminarId);
  if (!seminar) {
    return "Seminar not found";
  }
  if (seminar.registeredStudents.includes(studentId)) {
    return "Student already registered";
  }
  if (seminar.registeredStudents.length === seminar.seatLimit) {
    return "No seat available for this seminar";
  }
  seminar.registeredStudents.push(studentId);
  const result = await seminar.save();
  return result;
};
export {
  getSeminarService,
  addSeminarService,
  registerStudentToSeminarService,
};
