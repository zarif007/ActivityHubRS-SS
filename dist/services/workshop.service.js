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
exports.registerStudentToWorkshopService = exports.addWorkshopService = exports.getWorkshopService = void 0;
const workshop_model_1 = require("../models/workshop.model");
const getWorkshopService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const workshops = yield workshop_model_1.WorkshopModel.find(query);
    return workshops;
});
exports.getWorkshopService = getWorkshopService;
const addWorkshopService = (seminar) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield workshop_model_1.WorkshopModel.create(seminar);
    return result;
});
exports.addWorkshopService = addWorkshopService;
const registerStudentToWorkshopService = (workshopId, studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const workshop = yield workshop_model_1.WorkshopModel.findById(workshopId);
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
    const result = yield workshop.save();
    return result;
});
exports.registerStudentToWorkshopService = registerStudentToWorkshopService;
