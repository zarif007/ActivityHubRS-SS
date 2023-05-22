"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sms_service_1 = require("../services/sms.service");
const sendRegistrationSms = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { to, message } = req.body;
        const token = process.env.SMS_TOKEN;
        const smsResponse = yield (0, sms_service_1.sendSms)(token, to, message);
        res.status(200).json({
            success: true,
            data: smsResponse,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in sending sms",
        });
    }
});
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
exports.default = {
    sendRegistrationSms,
};
