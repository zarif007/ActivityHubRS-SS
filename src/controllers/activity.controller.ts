import { convertToObjectId } from "./../utils/utility";
import { Request, Response, NextFunction } from "express";
import {
  addActivityService,
  getActivitiesService,
  getActivityByIdService,
} from "../services/activity.service";
import { getInstructorService } from "../services/instructor.services";
import { addActivityStateService } from "../services/activityState.service";

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
    const { activities } = req.body;
    
    // when admin dashboard is ready, will change this
    
    const newActivities = await Promise.all(activities.map(async(activity: any) => {
      const instructor = await getInstructorService({ "shortName": activity.instructor });
      activity.instructor = instructor[0]._id;
      return activity;
    }));
    const addedActivities = await Promise.all(newActivities.map(async(activity: any) => {
      const result = await addActivityService(activity);
      return {activityId: result._id, totalSeat: activity.totalSeat,registrationDay:activity.registrationDay};
    }));
    if(addedActivities){
      const result = await addActivityStateService(addedActivities);
      if(result){
        res.status(200).json({
          success: true,
          data: result,
          message: "Activity added successfully",
        });
      }
    }
    
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
