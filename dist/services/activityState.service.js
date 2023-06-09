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
exports.overallSeatStatusService = exports.checkActivityStateStatusService = exports.bookSeatByActivityStateIdService = exports.updateActivityStateByActivityIdService = exports.addActivityStateService = exports.getActivityStateByActivityIdService = exports.getActivityStateService = void 0;
const activityState_model_1 = require("../models/activityState.model");
const getActivityStateService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const activities = yield activityState_model_1.ActivityStateModel.find(query).populate("activityId");
    return activities;
});
exports.getActivityStateService = getActivityStateService;
const getActivityStateByActivityIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { activityId: id };
    const activityState = yield activityState_model_1.ActivityStateModel.findOne(filter)
        .populate("activityId")
        .populate({
        path: 'activityId',
        populate: {
            path: 'instructor',
            model: 'Instructor'
        }
    });
    return activityState;
});
exports.getActivityStateByActivityIdService = getActivityStateByActivityIdService;
// ActivityState insertion
const addActivityStateService = (activityState) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield activityState_model_1.ActivityStateModel.create(activityState);
    return result;
});
exports.addActivityStateService = addActivityStateService;
const updateActivityStateByActivityIdService = (id, updateState) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield activityState_model_1.ActivityStateModel.findOneAndUpdate({ activityId: id }, updateState, { new: true });
    return result;
});
exports.updateActivityStateByActivityIdService = updateActivityStateByActivityIdService;
const bookSeatByActivityStateIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const updateState = { $inc: { bookedSeat: 1 } };
    const result = yield activityState_model_1.ActivityStateModel.findByIdAndUpdate(id, updateState, {
        new: true,
    });
    return result;
});
exports.bookSeatByActivityStateIdService = bookSeatByActivityStateIdService;
const checkActivityStateStatusService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const selection = { activityId: 1, bookedSeat: 1, totalSeat: 1 };
    const result = yield activityState_model_1.ActivityStateModel.find(query)
        .select(selection)
        .populate("activityId", { name: 1 });
    return result;
});
exports.checkActivityStateStatusService = checkActivityStateStatusService;
const overallSeatStatusService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield activityState_model_1.ActivityStateModel.aggregate([
        {
            $group: {
                _id: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }),
                totalSeat: { $sum: '$totalSeat' },
                totalBookedSeat: { $sum: '$bookedSeat' }
            }
        }
    ]);
    return result;
});
exports.overallSeatStatusService = overallSeatStatusService;
