import { Request, Response, NextFunction } from "express";
import { sendSms } from "../services/sms.service";



const sendRegistrationSms = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { to, message } = req.body;
        
        const smsResponse = await sendSms(to, message);
        res.status(200).json({
            success: true,
            data: smsResponse,
        });
    } catch (err: any) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in sending sms",
        });
    }
};

// const getActivityById = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { id } = req.params;
//   try {
//     const activity = await getActivityByIdService(id);
//     res.status(200).json({
//       success: true,
//       data: activity,
//     });
//   } catch (err: any) {
//     res.status(400).json({
//       success: false,
//       err: err.message,
//       message: "Error in getting activity",
//     });
//   }
// };

// const addActivity = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { activity } = req.body;
//     const result = await addActivityService(activity);
//     res.status(200).json({
//       success: true,
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(400).json({
//       success: false,
//       err: err.message,
//       message: "Error in Adding activity",
//     });
//   }
// };



export default {
    sendRegistrationSms,
};
