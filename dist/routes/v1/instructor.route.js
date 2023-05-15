"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const instructor_controller_1 = __importDefault(require("../../controllers/instructor.controller"));
const router = express_1.default.Router();
router.route('/')
    .get(instructor_controller_1.default.getInstructor)
    .post(instructor_controller_1.default.addInstructor);
router.route('/:id')
    .get(instructor_controller_1.default.getInstructorById)
    .put(instructor_controller_1.default.updateInstructor);
exports.default = router;
