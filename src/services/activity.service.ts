import { ActivityModel } from "../models/activity.model";

const getActivitiesService = async (query: Object) => {
  const activities = await ActivityModel.find(query).populate("instructor");
  return activities;
};

const getActivityByIdService = async (id: string) => {
  const activity = await ActivityModel.findById(id).populate("instructor");
  return activity;
};

// Multiple activity insertion
const addActivityService = async (activities: any) => {
  const result = await ActivityModel.create(activities);
  return result;
};



export { getActivitiesService, getActivityByIdService, addActivityService };
