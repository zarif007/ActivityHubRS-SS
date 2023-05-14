import express from "express";
const router = express.Router();

import {getHome} from '../../controllers/main.controller';


import StudentRoute from './student.route';
import ActivityRoute from './activity.route'
 
/*   
    @route      ALL /api/v1/
    @detail     This is the main hit point for the API version 1
*/ 
router.get('/', getHome);



/*   
    @route      GET /api/v1/student/{route}
    @detail     This is every router hit point for the student endpoints
*/
router.use('/student', StudentRoute);

/*   
    @route      GET /api/v1/activity/{route}
    @detail     This is every router hit point for the activity endpoints
*/
router.use('/activity', ActivityRoute);



export default router;
