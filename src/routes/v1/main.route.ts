import express from "express";
const router = express.Router();

import {getHome} from '../../controllers/main.controller';


import StudentRoute from './student.route';
 
/*   
    @route      ALL /api/v1/
    @detail     This is the main hitpoint for the API version 1
*/ 
router.get('/', getHome);



/*   
    @route      GET /api/v1/{route}
    @detail     This is every router hitpoint for the API version 1
*/
router.use('/student', StudentRoute);



export default router;
