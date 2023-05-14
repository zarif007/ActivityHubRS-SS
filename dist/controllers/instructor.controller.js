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
const instructor_services_1 = require("../services/instructor.services");
const utility_1 = require("../utils/utility");
const getInstructor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instructor = yield (0, instructor_services_1.getInstructorService)();
        res.status(200).json({
            success: true,
            data: instructor
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting instructor"
        });
    }
});
// Should implement if not instructor found then return not found
const getInstructorById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const instructor = yield (0, instructor_services_1.getInstructorByIdService)((0, utility_1.convertToObjectId)(id));
        res.status(200).json({
            success: true,
            data: instructor,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting instructor"
        });
    }
});
const addInstructor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { instructor } = req.body;
        const result = yield (0, instructor_services_1.addInstructorService)(instructor);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Adding new instructor"
        });
    }
});
exports.default = {
    getInstructor,
    getInstructorById,
    addInstructor
};
