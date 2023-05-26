import { StudentModel } from "../models/student.model";

const getStudentsService = async () => {
  const students = await StudentModel.find({});
  return students;
};

const getStudentsByEmailService = async (email: String) => {
  const student = await StudentModel.findOne({ email });
  return student;
};
const getStudentByIdService = async (id: String) => {
  const student = await StudentModel.findOne({ _id: id });
  return student;
};

const addStudentsService = async (students: JSON) => {
  const result = await StudentModel.create(students);
  return result;
};

const updateStudentById = async (id: string,updateData:any) => {
  const result = await StudentModel.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return result;
};

export {
  getStudentsService,
  getStudentsByEmailService,
  getStudentByIdService,
  addStudentsService,
  updateStudentById
};
