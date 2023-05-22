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
const student_services_1 = require("../services/student.services");
const getStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, student_services_1.getStudentsService)();
        res.status(200).json({
            success: true,
            data: students,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting students",
        });
    }
});
const getStudentsByEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const student = yield (0, student_services_1.getStudentsByEmailService)(email);
        res.status(200).json({
            success: true,
            data: student,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting student",
        });
    }
});
const addStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = req.body;
        const result = yield (0, student_services_1.addStudentsService)(students);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting student",
        });
    }
});
exports.default = {
    getStudents,
    getStudentsByEmail,
    addStudents,
};
