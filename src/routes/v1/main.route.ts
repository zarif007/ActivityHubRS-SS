import express from "express";
const router = express.Router();

import { getHome } from "../../controllers/main.controller";

import StudentRoute from "./student.route";
import ActivityRoute from "./activity.route";
import ActivityStateRoute from "./activityState.route";
import InstructorRoute from "./instructor.route";
import ActivityRegistrationRoute from "./activityRegistration.route";
import SmsRoute from "./sms.route";
import SeminarRoute from './seminar.route'
import AdminDashboardRoute from './adminDashboard.route'

import { rateLimiter } from "../../middleware/rateLimiter";


/*   
    @route      ALL /api/v1/
    @detail     This is the main hit point for the API version 1
*/
router.get("/", getHome);

/*   
    @route      GET /api/v1/student/{route}
    @detail     This is every router hit point for the student endpoints
*/
router.use("/student", rateLimiter, StudentRoute);

/*   
    @route      GET /api/v1/activity/{route}
    @detail     This is every router hit point for the activity endpoints
*/
router.use("/activity", ActivityRoute);
/*   
    @route      GET /api/v1/activityState/{route}
    @detail     This is every router hit point for the activityState endpoints
*/
router.use("/activityState", ActivityStateRoute);

/*   
    @route      GET /api/v1/registration/{route}
    @detail     This is every router hit point for the registration endpoints
*/
router.use("/registration", rateLimiter, ActivityRegistrationRoute);

/*   
    @route      GET /api/v1/instructor/{route}
    @route      POST /api/v1/instructor/
    @detail     This is every router hit point for the instructor endpoints
*/
router.use("/instructor", InstructorRoute);


// 
router.use("/sms", SmsRoute);

router.use('/seminar',SeminarRoute)


router.use('/admin',AdminDashboardRoute)

export default router;
