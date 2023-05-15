"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const activity_controller_1 = __importDefault(require("../../controllers/activity.controller"));
router
    .route("/")
    .get(activity_controller_1.default.getActivities)
    .post(activity_controller_1.default.addActivity);
router
    .route("/:id").get(activity_controller_1.default.getActivityById);
exports.default = router;
