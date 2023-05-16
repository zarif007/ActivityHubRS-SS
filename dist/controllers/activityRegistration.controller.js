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
const activityRegistration_service_1 = require("../services/activityRegistration.service");
const activityState_service_1 = require("../services/activityState.service");
const getRegistrations = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const registrations = yield (0, activityRegistration_service_1.getRegistrationsService)(query);
        res.status(200).json({
            success: true,
            data: registrations,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting registrations",
        });
    }
});
const getRegistrationByStudentId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const registration = yield (0, activityRegistration_service_1.getRegistrationByStudentIdService)(studentId);
        res.status(200).json({
            success: true,
            data: registration,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting registrations",
        });
    }
});
const getRegistrationsByActivityId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { activityId } = req.params;
        const registrations = yield (0, activityRegistration_service_1.getRegistrationsByActivityIdService)(activityId);
        res.status(200).json({
            success: true,
            data: registrations,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting registrations",
        });
    }
});
const addRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registration = req.body;
        const { activityId } = registration;
        const activityState = yield (0, activityState_service_1.getActivityStateByActivityIdService)(activityId);
        if (activityState) {
            if (activityState.totalSeat <= activityState.bookedSeat) {
                res.status(400).json({
                    success: false,
                    message: "No more seats available for this activity",
                });
                return;
            }
            const activity = yield (0, activityState_service_1.bookSeatByActivityStateIdService)(activityState._id.toHexString());
            console.log(activity);
            const result = yield (0, activityRegistration_service_1.addRegistrationService)(registration);
            res.status(200).json({
                success: true,
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Adding Registration",
        });
    }
});
exports.default = {
    getRegistrationByStudentId,
    getRegistrations,
    getRegistrationsByActivityId,
    addRegistration,
};
