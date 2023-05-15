import { convertToObjectId } from "./../utils/utility";
import { Request, Response, NextFunction } from "express";
import {
  addActivityService,
  getActivitiesService,
  getActivityByIdService,
} from "../services/activity.service";

const getActivities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query;
    const activities = await getActivitiesService(query);
    res.status(200).json({
      success: true,
      data: activities,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting activities",
    });
  }
};

const getActivityById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const activity = await getActivityByIdService(id);
    res.status(200).json({
      success: true,
      data: activity,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting activity",
    });
  }
};

const addActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { activity } = req.body;
    const result = await addActivityService(activity);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in Adding activity",
    });
  }
};

export default {
  getActivities,
  getActivityById,
  addActivity,
};
