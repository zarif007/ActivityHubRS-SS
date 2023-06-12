import {
    getWorkshopService,
    addWorkshopService,
    registerStudentToWorkshopService,
} from "../services/workshop.service";
import { Request, Response, NextFunction } from "express";

const getWorkshop = async (req: Request, res: Response) => {
  try {
    const { _id } = req.query;
    const workshop = await getWorkshopService(_id ? { _id }: {});
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

const registerStudentToWorkshop = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { workshopId } = req.params;
    const { studentId } = req.body;

    // Checking if this workshop exists
    // no need to check it here, we can check it in the service
    // await getWorkshopService({ _id: workshopId })

    // Register student
    const result = await registerStudentToWorkshopService(workshopId, studentId);
    console.log(result)
    
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Registering to this workshop",
    });
  }
  
}

export default { getWorkshop, addWorkshop, registerStudentToWorkshop };
