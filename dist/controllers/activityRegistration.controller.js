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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const activityRegistration_service_1 = require("../services/activityRegistration.service");
const activityState_service_1 = require("../services/activityState.service");
const student_services_1 = require("../services/student.services");
const sms_service_1 = require("../services/sms.service");
const exceljs_1 = __importDefault(require("exceljs"));
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
const downloadRegistrations = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registrations = yield (0, activityRegistration_service_1.downloadRegistrationsService)();
        // res.status(200).json({registrations});
        // return ;
        const workbook = new exceljs_1.default.Workbook();
        const headers = [
            { header: "SL", key: "sl", width: 5 },
            { header: "Name", key: "name", width: 35 },
            { header: "ID", key: "studentId", width: 12 },
            { header: "Email", key: "email", width: 30 },
            { header: "Phone Number", key: "phoneNumber", width: 15 },
            { header: "Bng Section", key: "bngSection", width: 15 },
        ];
        registrations.map((registration) => {
            const worksheet = workbook.addWorksheet(registration.activity);
            worksheet.columns = headers;
            const headerRow = worksheet.getRow(1);
            headerRow.font = { bold: true, size: 12 };
            headerRow.alignment = { vertical: "middle", horizontal: "center" };
            worksheet.addRows(registration.students);
        });
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.setHeader("Content-Disposition", `attachment; filename=${"Activity Registration.xlsx"}`);
        yield workbook.xlsx.write(res);
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
        const { activityId, studentId, newPhoneNumber } = req.body;
        // Fetching activity state for seat status
        const activityState = yield (0, activityState_service_1.getActivityStateByActivityIdService)(activityId);
        // Checking if there is available seats in this activity
        if (activityState) {
            if (activityState.totalSeat <= activityState.bookedSeat) {
                res.status(400).json({
                    success: false,
                    message: "No more seat available for this activity",
                });
                return;
            }
            const student = yield (0, student_services_1.getStudentByIdService)(studentId);
            const validGender = activityState.activityId.remarks.gender;
            if (!student) {
                res.status(400).json({
                    success: false,
                    message: "Student not found in this email",
                });
                return;
            }
            else if (validGender != "Both" && validGender != student.gender) {
                res.status(400).json({
                    success: false,
                    message: `This activity is only available for ${validGender}`,
                });
                return;
            }
            /*
                Try/Catch for checking if this email enrolled to an activity or not
                It saves one extra API call
              */
            try {
                // Inserting registration to DB
                const registration = yield (0, activityRegistration_service_1.addRegistrationService)({ activityId, studentId });
                // Incrementing booked seat
                yield (0, activityState_service_1.bookSeatByActivityStateIdService)(activityState._id.toHexString());
                // Updating phone number 
                yield (0, student_services_1.updateStudentById)(studentId, { phoneNumber: newPhoneNumber });
                // Sending sms to student
                const smsResponse = yield (0, sms_service_1.sendSms)(newPhoneNumber, `${student.name} has been successfully enrolled into ${activityState.activityId.name} activity.  `);
                res.status(200).json({
                    success: true,
                    data: { smsResponse, registration },
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
    downloadRegistrations,
};
