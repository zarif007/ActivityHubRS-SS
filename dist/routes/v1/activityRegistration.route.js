"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const activityRegistration_controller_1 = __importDefault(require("../../controllers/activityRegistration.controller"));
const activityState_controller_1 = __importDefault(require("../../controllers/activityState.controller"));
router
    .route("/")
    .get(activityRegistration_controller_1.default.getRegistrations)
    .post(activityRegistration_controller_1.default.addRegistration);
router
    .route("/checkStatus")
    .get(activityState_controller_1.default.checkActivityStatus);
router
    .route("/export")
    .get(activityRegistration_controller_1.default.downloadRegistrations);
router
    .route("/byStudentId/:studentId")
    .get(activityRegistration_controller_1.default.getRegistrationByStudentId);
router
    .route("/byActivityId/:activityId")
    .get(activityRegistration_controller_1.default.getRegistrationsByActivityId);
exports.default = router;
