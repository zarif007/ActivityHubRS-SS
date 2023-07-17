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
const seminar_service_1 = require("../services/seminar.service");
const getSeminar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.query;
        const seminar = yield (0, seminar_service_1.getSeminarService)(_id ? { _id } : {});
        res.status(200).json({
            success: true,
            data: seminar,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting seminars",
        });
    }
});
const getSeminarById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { seminarId } = req.params;
        const seminar = yield (0, seminar_service_1.getSeminarRegistrationService)(seminarId);
        res.status(200).json({
            success: true,
            data: seminar,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting seminars",
        });
    }
});
const addSeminar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seminar = req.body;
        const result = yield (0, seminar_service_1.addSeminarService)(seminar);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Adding new seminar",
        });
    }
});
const registerStudentToSeminar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { seminarId } = req.params;
        const { studentId } = req.body;
        // Register student
        const result = yield (0, seminar_service_1.registerStudentToSeminarService)(seminarId, studentId);
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
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Registering to this seminar",
        });
    }
});
exports.default = { getSeminar, addSeminar, registerStudentToSeminar, getSeminarById };
