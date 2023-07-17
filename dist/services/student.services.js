"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateManyStudentsService = exports.updateStudentById = exports.addStudentsService = exports.getStudentByIdService = exports.getStudentsByEmailService = exports.getStudentsService = void 0;
const student_model_1 = require("../models/student.model");
const getStudentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield student_model_1.StudentModel.find({});
    return students;
});
exports.getStudentsService = getStudentsService;
const getStudentsByEmailService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_model_1.StudentModel.findOne({ email });
    return student;
});
exports.getStudentsByEmailService = getStudentsByEmailService;
const getStudentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_model_1.StudentModel.findOne({ _id: id });
    return student;
});
exports.getStudentByIdService = getStudentByIdService;
const addStudentsService = (students) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.create(students);
    return result;
});
exports.addStudentsService = addStudentsService;
const updateStudentById = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.findByIdAndUpdate(id, updateData, {
        new: true,
    });
    return result;
});
exports.updateStudentById = updateStudentById;
const updateManyStudentsService = (students, updateQuery) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.updateMany({ studentId: { $in: students } }, { $set: updateQuery });
    return result;
});
exports.updateManyStudentsService = updateManyStudentsService;
