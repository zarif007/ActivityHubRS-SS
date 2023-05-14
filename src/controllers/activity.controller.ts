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
    const activities = await getActivitiesService();
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
  const { id } = req.body;
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

// Single activity insertion
const addActivity = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const activity = req.body;
    const result = await addActivityService(activity);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting student",
    });
  }
};

// Multiple activity insertion
const addActivities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const activities = req.body;
    const result = await addActivityService(activities);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      err: err.message,
      message: "Error in getting student",
    });
  }
};

export default {
  getActivities,
  getActivityById,
  addActivity,
  addActivities,
};
