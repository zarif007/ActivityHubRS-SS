"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const main_controller_1 = require("../../controllers/main.controller");
const student_route_1 = __importDefault(require("./student.route"));
const activity_route_1 = __importDefault(require("./activity.route"));
const activityState_route_1 = __importDefault(require("./activityState.route"));
const instructor_route_1 = __importDefault(require("./instructor.route"));
const activityRegistration_route_1 = __importDefault(require("./activityRegistration.route"));
const rateLimiter_1 = require("../../middleware/rateLimiter");
/*
    @route      ALL /api/v1/
    @detail     This is the main hit point for the API version 1
*/
router.get("/", main_controller_1.getHome);
/*
    @route      GET /api/v1/student/{route}
    @detail     This is every router hit point for the student endpoints
*/
router.use("/student", rateLimiter_1.rateLimiter, student_route_1.default);
/*
    @route      GET /api/v1/activity/{route}
    @detail     This is every router hit point for the activity endpoints
*/
router.use("/activity", activity_route_1.default);
/*
    @route      GET /api/v1/activityState/{route}
    @detail     This is every router hit point for the activityState endpoints
*/
router.use("/activityState", activityState_route_1.default);
/*
    @route      GET /api/v1/registration/{route}
    @detail     This is every router hit point for the registration endpoints
*/
router.use("/registration", rateLimiter_1.rateLimiter, activityRegistration_route_1.default);
/*
    @route      GET /api/v1/instructor/{route}
    @route      POST /api/v1/instructor/
    @detail     This is every router hit point for the instructor endpoints
*/
router.use("/instructor", instructor_route_1.default);
exports.default = router;
