import { ActivityModel } from "../models/activity.model";

const getActivitiesService = async () => {
  const activities = await ActivityModel.find({});
  return activities;
};

const getActivityByIdService = async (id: string) => {
  const activity = await ActivityModel.findById(id);
  return activity;
};

// Single activity insertion
const addActivityService = async (activity: JSON) => {
  const result = await ActivityModel.create(activity);
  return result;
};

// Multiple activity insertion
const addActivitiesService = async (activities: JSON) => {
  const result = await ActivityModel.insertMany(activities);
  return result;
};

export {
  getActivitiesService,
  getActivityByIdService,
  addActivityService,
  addActivitiesService,
};
