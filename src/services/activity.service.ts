import { ActivityModel } from "../models/activity.model";

const getActivitiesService = async (query:Object) => {
  const activities = await ActivityModel.find(query).populate("instructor");
  return activities;
};

const getActivityByIdService = async (id: string) => {
const activity = await ActivityModel.findById(id).populate("instructor");
  return activity;
};

// Single activity insertion
const addActivityService = async (activity: Object) => {
  console.log(activity);
  const result = await ActivityModel.create(activity);
  return result;
};



export {
  getActivitiesService,
  getActivityByIdService,
  addActivityService,
};
