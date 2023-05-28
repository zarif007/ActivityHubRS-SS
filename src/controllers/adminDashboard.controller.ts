
import {Request, Response, NextFunction} from 'express';
import { addAdminDashboardService,getAdminDashboardService, updateAdminDashboardService } from '../services/adminDashboard.service';





const getAdminDashboard = async (req:Request, res:Response,next:NextFunction) => {
    
    try{
        const query = req.query;
        const adminDashboard = await getAdminDashboardService(query);
        
        res.status(200).json({
            success: true,
            data: adminDashboard
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting Admin Dashboard"
        })
    }
}

const addAdminDashboard = async (req:Request, res:Response,next:NextFunction) => {
    try{
        const {adminDashboard} = req.body;
        const result = await addAdminDashboardService(adminDashboard);
        res.status(200).json({
            success: true,
            data: result,
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in adding new Admin Dashboard"
        })
    }
}

const updateAdminDashboard = async (req:Request, res:Response,next:NextFunction) => {
    try{
        const {session} = req.query;
        const {adminDashboard} = req.body;
        const result = await updateAdminDashboardService(session,adminDashboard);
        res.status(200).json({
            success: true,
            data: result,
        })
    }
    catch(err:any){
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Updating new adminDashboard"
        })
    }
}




export default {
    addAdminDashboard,
    getAdminDashboard,
    updateAdminDashboard,
}