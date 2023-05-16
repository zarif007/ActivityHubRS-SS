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
exports.addRegistrationService = exports.getRegistrationsByActivityIdService = exports.getRegistrationByStudentIdService = exports.getRegistrationsService = void 0;
const activityRegistration_model_1 = require("../models/activityRegistration.model");
// Fetching registrations based on query (default {} => all)
const getRegistrationsService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const registrations = yield activityRegistration_model_1.ActivityRegistrationModel.find(query)
        .populate("studentId")
        .populate("activityId");
    return registrations;
});
exports.getRegistrationsService = getRegistrationsService;
// Fetching registration based student id
const getRegistrationByStudentIdService = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const registration = yield activityRegistration_model_1.ActivityRegistrationModel.find({ studentId });
    return registration;
});
exports.getRegistrationByStudentIdService = getRegistrationByStudentIdService;
// Fetching registration based activity id
const getRegistrationsByActivityIdService = (activityId) => __awaiter(void 0, void 0, void 0, function* () {
    const registrations = yield activityRegistration_model_1.ActivityRegistrationModel.find({ activityId });
    return registrations;
});
exports.getRegistrationsByActivityIdService = getRegistrationsByActivityIdService;
// Inserting registration
const addRegistrationService = (registration) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield activityRegistration_model_1.ActivityRegistrationModel.create(registration);
    return res;
});
exports.addRegistrationService = addRegistrationService;
