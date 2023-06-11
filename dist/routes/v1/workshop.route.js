"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workshop_controller_1 = __importDefault(require("../../controllers/workshop.controller"));
const router = express_1.default.Router();
router
    .route("/")
    .get(workshop_controller_1.default.getWorkshop)
    .post(workshop_controller_1.default.addWorkshop);
router
    .route("/register/:workshopId")
    .post(workshop_controller_1.default.registerStudentToWorkshop);
exports.default = router;
