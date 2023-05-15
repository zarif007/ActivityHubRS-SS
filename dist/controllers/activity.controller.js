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
const activity_service_1 = require("../services/activity.service");
const getActivities = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const activities = yield (0, activity_service_1.getActivitiesService)(query);
        res.status(200).json({
            success: true,
            data: activities,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting activities",
        });
    }
});
const getActivityById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const activity = yield (0, activity_service_1.getActivityByIdService)(id);
        res.status(200).json({
            success: true,
            data: activity,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting activity",
        });
    }
});
const addActivity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { activity } = req.body;
        const result = yield (0, activity_service_1.addActivityService)(activity);
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
exports.default = {
    getActivities,
    getActivityById,
    addActivity,
};
