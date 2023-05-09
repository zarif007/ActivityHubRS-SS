import express from "express";

const router = express.Router();



import studentController from '../../controllers/student.controller';


router.route('/')
.get(studentController.getStudents)

router.route('/email')
.get(studentController.getStudentsByEmail)


export default():express.Router => router;