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
const workshop_service_1 = require("../services/workshop.service");
const getWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.query;
        const workshop = yield (0, workshop_service_1.getWorkshopService)(_id ? { _id } : {});
        res.status(200).json({
            success: true,
            data: workshop,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting workshops",
        });
    }
});
const addWorkshop = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workshop = req.body;
        const result = yield (0, workshop_service_1.addWorkshopService)(workshop);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Adding new workshop",
        });
    }
});
const registerStudentToWorkshop = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { workshopId } = req.params;
        const { studentId } = req.body;
        // Checking if this workshop exists
        // no need to check it here, we can check it in the service
        // await getWorkshopService({ _id: workshopId })
        // Register student
        const result = yield (0, workshop_service_1.registerStudentToWorkshopService)(workshopId, studentId);
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
            message: "Error in Registering to this workshop",
        });
    }
});
exports.default = { getWorkshop, addWorkshop, registerStudentToWorkshop };
