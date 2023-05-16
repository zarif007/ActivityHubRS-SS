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
exports.updateActivityStateService = exports.addActivityStateService = exports.getActivityStateByActivityIdService = exports.getActivityStateService = void 0;
const activityState_model_1 = require("../models/activityState.model");
const getActivityStateService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const activities = yield activityState_model_1.ActivityStateModel.find(query).populate("activityId");
    return activities;
});
exports.getActivityStateService = getActivityStateService;
const getActivityStateByActivityIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { activityId: id };
    const activityState = yield activityState_model_1.ActivityStateModel.findOne(filter);
    return activityState;
});
exports.getActivityStateByActivityIdService = getActivityStateByActivityIdService;
// ActivityState insertion
const addActivityStateService = (activityState) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield activityState_model_1.ActivityStateModel.create(activityState);
    return result;
});
exports.addActivityStateService = addActivityStateService;
const updateActivityStateService = (id, UpdateState) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield activityState_model_1.ActivityStateModel.findByIdAndUpdate(id, UpdateState, { rawResult: true });
    return result;
});
exports.updateActivityStateService = updateActivityStateService;
