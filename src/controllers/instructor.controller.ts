
import {Request, Response, NextFunction} from 'express';
import { addInstructorService, getInstructorByIdService, getInstructorService, updateInstructorService } from '../services/instructor.services';
import { convertToObjectId } from '../utils/utility';



const getInstructor = async (req:Request, res:Response,next:NextFunction) => {
    
    try{
        const query = req.query;
        const instructor = await getInstructorService(query);
        
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
        const instructor = await getInstructorByIdService(id);
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

const updateInstructor = async (req:Request, res:Response,next:NextFunction) => {
    try{
        const {id} = req.params;
        const {instructor} = req.body;
        const result = await updateInstructorService(convertToObjectId(id),instructor);
        res.status(200).json({
            success: true,
            data: result,
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Updating new instructor"
        })
    }
}




export default {
    getInstructor,
    getInstructorById,

    addInstructor,

    updateInstructor,
}