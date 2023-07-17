import { SeminarModel } from "../models/seminar.model";
import { StudentModel } from "../models/student.model";

const getSeminarService = async (query: Object) => {
  const seminars = await SeminarModel.find(query);
  return seminars;
};
const getSeminarRegistrationService = async (seminerId: string) => {
  const seminars = await SeminarModel.findById(seminerId, "registeredStudents name slot")

  const students = await StudentModel.find({ _id: { $in: seminars?.registeredStudents } }, 'registeredStudents name email gender phoneNumber engSection')
  if (!seminars) throw new Error("Seminar not found")
  return { name: seminars.name, slot: seminars.slot, registeredStudents: students };
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
  getSeminarRegistrationService
};
