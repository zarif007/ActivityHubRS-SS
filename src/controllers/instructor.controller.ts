
import {Request, Response, NextFunction} from 'express';
import { addInstructorService, getInstructorByIdService, getInstructorService } from '../services/instructor.services';
import { convertToObjectId } from '../utils/utility';



const getInstructor = async (req:Request, res:Response,next:NextFunction) => {
    
    try{
        const instructor = await getInstructorService();
        
        res.status(200).json({
            success: true,
            data: instructor
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting instructor"
        })
    }
}
// Should implement if not instructor found then return not found
const getInstructorById = async (req:Request, res:Response,next:NextFunction) => {
    try{
        const {id} = req.params;
        const instructor = await getInstructorByIdService(convertToObjectId(id));
        res.status(200).json({
            success: true,
            data: instructor,
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting instructor"
        })
    }
}
const addInstructor = async (req:Request, res:Response,next:NextFunction) => {
    try{
        const {instructor} = req.body;
        const result = await addInstructorService(instructor);
        res.status(200).json({
            success: true,
            data: result,
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Adding new instructor"
        })
    }
}




export default {
    getInstructor,
    getInstructorById,
    addInstructor
}