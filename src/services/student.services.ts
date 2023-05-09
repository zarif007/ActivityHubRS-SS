import { StudentModel } from "../models/student.model";


const getStudentsService = async () => {
    const students = await StudentModel.find({});
    return students;
}

const getStudentsByEmailService = async (email:String) => {
    const student = await StudentModel.findOne({email});
    return student;
}
const getStudentsByStudentIdService = async (studentId:String) => {
    const student = await StudentModel.findOne({studentId});
    return student;
}

export  {
    getStudentsService,
    getStudentsByEmailService,
    getStudentsByStudentIdService
}
