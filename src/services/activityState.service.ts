import { ActivityStateModel } from "../models/activityState.model";
import { convertToObjectId } from "../utils/utility";

const getActivityStateService = async (query: any) => {
  const activities = await ActivityStateModel.find(query).populate("activityId");
  return activities;
};

const getActivityStateByActivityIdService = async(id: string) => {
  const filter = { activityId: id };
  const activityState = await ActivityStateModel.findOne(filter);
  return activityState;
};

// ActivityState insertion
const addActivityStateService = async (activityState: any) => {
  const result = await ActivityStateModel.create(activityState);
  return result;
};

const updateActivityStateService = async (id:string,UpdateState: any) => {
  const result = await ActivityStateModel.findByIdAndUpdate(id,UpdateState,{rawResult:true});
  return result;
};



export { getActivityStateService, getActivityStateByActivityIdService, addActivityStateService,updateActivityStateService };
