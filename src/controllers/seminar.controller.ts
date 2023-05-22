import { getSeminarService } from "../services/seminar.service"
import { Request, Response, NextFunction } from "express";

const getSeminar = async (req:Request, res:Response)=> {
   try {
    const seminar = await getSeminarService()
    res.status(200).json({
        success:true,
        data:seminar
    })
    
    }catch (err: any) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting seminars",
        });
      }
}

export default {getSeminar}