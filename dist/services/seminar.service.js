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
exports.getSeminarRegistrationService = exports.registerStudentToSeminarService = exports.addSeminarService = exports.getSeminarService = void 0;
const seminar_model_1 = require("../models/seminar.model");
const student_model_1 = require("../models/student.model");
const getSeminarService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const seminars = yield seminar_model_1.SeminarModel.find(query);
    return seminars;
});
exports.getSeminarService = getSeminarService;
const getSeminarRegistrationService = (seminerId) => __awaiter(void 0, void 0, void 0, function* () {
    const seminars = yield seminar_model_1.SeminarModel.findById(seminerId, "registeredStudents name slot");
    const students = yield student_model_1.StudentModel.find({ _id: { $in: seminars === null || seminars === void 0 ? void 0 : seminars.registeredStudents } }, 'registeredStudents name email gender phoneNumber engSection');
    if (!seminars)
        throw new Error("Seminar not found");
    return { name: seminars.name, slot: seminars.slot, registeredStudents: students };
});
exports.getSeminarRegistrationService = getSeminarRegistrationService;
const addSeminarService = (seminar) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seminar_model_1.SeminarModel.create(seminar);
    return result;
});
exports.addSeminarService = addSeminarService;
const registerStudentToSeminarService = (seminarId, studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const seminar = yield seminar_model_1.SeminarModel.findById(seminarId);
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
    const result = yield seminar.save();
    return result;
});
exports.registerStudentToSeminarService = registerStudentToSeminarService;
