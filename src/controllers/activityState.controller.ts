import { Request, Response, NextFunction } from "express";

import {
  addActivityStateService,
  getActivityStateByActivityIdService,
  getActivityStateService,
  updateActivityStateService,
} from "../services/activityState.service";

const getActivityState = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query;
    const activityStates = await getActivityStateService(query);
    res.status(200).json({
      success: true,
      data: activityStates,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting activityStates",
    });
  }
};

const getActivityStateByActivityId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const activityState = await getActivityStateByActivityIdService(id);
    res.status(200).json({
      success: true,
      data: activityState,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting activity state",
    });
  }
};

const addActivityState = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const activityState = req.body;
    const result = await addActivityStateService(activityState);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Adding activity state",
    });
  }
};
const updateActivityState = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updatedActivityState = req.body;
    const result = await updateActivityStateService(id,updatedActivityState);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Updating activity state",
    });
  }
};



export default {
  getActivityState,
  getActivityStateByActivityId,
  addActivityState,
  updateActivityState,
};
