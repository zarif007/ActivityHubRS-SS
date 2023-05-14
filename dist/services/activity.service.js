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
exports.addActivitiesService = exports.addActivityService = exports.getActivityByIdService = exports.getActivitiesService = void 0;
const activity_model_1 = require("../models/activity.model");
const getActivitiesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const activities = yield activity_model_1.ActivityModel.find({});
    return activities;
});
exports.getActivitiesService = getActivitiesService;
const getActivityByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const activity = yield activity_model_1.ActivityModel.findById(id);
    return activity;
});
exports.getActivityByIdService = getActivityByIdService;
// Single activity insertion
const addActivityService = (activity) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield activity_model_1.ActivityModel.create(activity);
    return result;
});
exports.addActivityService = addActivityService;
// Multiple activity insertion
const addActivitiesService = (activities) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield activity_model_1.ActivityModel.insertMany(activities);
    return result;
});
exports.addActivitiesService = addActivitiesService;
