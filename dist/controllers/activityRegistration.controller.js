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
const sms_service_1 = require("../services/sms.service");
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
        const { activityId, studentId, studentName, newPhoneNumber } = req.body;
        // Fetching activity state for seat status
        const activityState = yield (0, activityState_service_1.getActivityStateByActivityIdService)(activityId);
        // Checking if there is available seats in this activity
        if (activityState) {
            if (activityState.totalSeat <= activityState.bookedSeat) {
                res.status(400).json({
                    success: false,
                    message: "No more seats available for this activity",
                });
                return;
            }
            /*
              Try/Catch for checking if this email enrolled to an activity or not
              It saves one extra API call
            */
            try {
                // Inserting registration to DB
                const result = yield (0, activityRegistration_service_1.addRegistrationService)({ activityId, studentId });
                // Incrementing booked seat
                yield (0, activityState_service_1.bookSeatByActivityStateIdService)(activityState._id.toHexString());
                // Sending sms to student
                const smsResponse = yield (0, sms_service_1.sendSms)(newPhoneNumber, `${studentName} has been successfully registered to ${activityState.activityId.name} activity`);
                res.status(200).json({
                    success: true,
                    data: { smsResponse }
                });
            }
            catch (err) {
                res.status(400).json({
                    success: false,
                    err: err.message,
                    message: "User with this email already enrolled to an activity",
                });
            }
        }
        else {
            res.status(400).json({
                success: false,
                message: "No activity found",
            });
            return;
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
