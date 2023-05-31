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
const activityState_service_1 = require("../services/activityState.service");
const getActivityState = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const activityStates = yield (0, activityState_service_1.getActivityStateService)(query);
        res.status(200).json({
            success: true,
            data: activityStates,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting activityStates",
        });
    }
});
const getActivityStateByActivityId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const activityState = yield (0, activityState_service_1.getActivityStateByActivityIdService)(id);
        res.status(200).json({
            success: true,
            data: activityState,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting activity state",
        });
    }
});
const addActivityState = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activityState = req.body;
        const result = yield (0, activityState_service_1.addActivityStateService)(activityState);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Adding activity state",
        });
    }
});
const updateActivityState = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedActivityState = req.body;
        const result = yield (0, activityState_service_1.updateActivityStateByActivityIdService)(id, updatedActivityState);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Updating activity state",
        });
    }
});
const checkActivityStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, activityState_service_1.checkActivityStateStatusService)(req.query);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Adding activity",
        });
    }
});
const overallSeatStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, activityState_service_1.overallSeatStatusService)();
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Getting seat status",
        });
    }
});
exports.default = {
    getActivityState,
    getActivityStateByActivityId,
    addActivityState,
    updateActivityState,
    checkActivityStatus,
    overallSeatStatus
};
