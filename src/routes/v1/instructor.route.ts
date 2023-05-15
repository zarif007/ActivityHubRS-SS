import express from "express";
import instructorController from "../../controllers/instructor.controller";

const router = express.Router();





router.route('/')
    .get(instructorController.getInstructor)
    .post(instructorController.addInstructor)

router.route('/:id')
    .get(instructorController.getInstructorById)
    .put(instructorController.updateInstructor)



export default router;