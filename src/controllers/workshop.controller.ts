import {
    getWorkshopService,
    addWorkshopService,
} from "../services/workshop.service";
import { Request, Response, NextFunction } from "express";

const getWorkshop = async (req: Request, res: Response) => {
  try {
    const workshop = await getWorkshopService();
    res.status(200).json({
      success: true,
      data: workshop,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting workshops",
    });
  }
};

const addWorkshop = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const workshop = req.body;
    const result = await addWorkshopService(workshop);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Adding new workshop",
    });
  }
};

export default { getWorkshop, addWorkshop };
