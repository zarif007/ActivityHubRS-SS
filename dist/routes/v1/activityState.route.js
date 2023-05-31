"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const activityState_controller_1 = __importDefault(require("../../controllers/activityState.controller"));
router
    .route("/")
    .get(activityState_controller_1.default.getActivityState)
    .post(activityState_controller_1.default.addActivityState);
router
    .route("/:id")
    .get(activityState_controller_1.default.getActivityStateByActivityId)
    .put(activityState_controller_1.default.updateActivityState);
router.route('/seatStatus/all').get(activityState_controller_1.default.overallSeatStatus);
exports.default = router;
