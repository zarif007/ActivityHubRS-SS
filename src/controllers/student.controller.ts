import {Request, Response, NextFunction} from 'express';
import {addStudentsService, getStudentsByEmailService, getStudentsService} from '../services/student.services';



const getStudents = async (req:Request, res:Response,next:NextFunction) => {
    
    try{
        const students = await getStudentsService();
        res.status(200).json({
            success: true,
            data: students
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting students"
        })
    }
}

const getStudentsByEmail = async (req:Request, res:Response,next:NextFunction) => {
    try{
        const {email} = req.body;
        const student = await getStudentsByEmailService(email);
        res.status(200).json({
            success: true,
            data: student,
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting student"
        })
    }
}
const addStudents = async (req:Request, res:Response,next:NextFunction) => {
    try{
        const students = req.body;
        const result = await addStudentsService(students);
        res.status(200).json({
            success: true,
            data: result,
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting student"
        })
    }
}




export default {
    getStudents,
    getStudentsByEmail,
    addStudents
}