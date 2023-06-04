import { ActivityInterface } from './../types/activity/index';
import { ActivityStateModel } from "../models/activityState.model";


const getActivityStateService = async (query: object) => {
  const activities = await ActivityStateModel.find(query).populate(
    "activityId"
  );
  return activities;
};

const getActivityStateByActivityIdService = async (id: string) => {
  const filter = { activityId: id };
  console.log(id);
  const activityState = await ActivityStateModel.findOne(filter)
    .populate<{activityId:ActivityInterface}>("activityId")
    .populate({
      path: 'activityId',
      populate: {
       path: 'instructor',
       model: 'Instructor'
      } 
    });
  return activityState;
};

// ActivityState insertion
const addActivityStateService = async (activityState: any) => {
  const result = await ActivityStateModel.create(activityState);
  return result;
};

const updateActivityStateByActivityIdService = async (
  id: string,
  updateState: any
) => {
  const result = await ActivityStateModel.findOneAndUpdate(
    { activityId: id },
    updateState,
    { new: true }
  );
  return result;
};

const bookSeatByActivityStateIdService = async (id: string) => {
  const updateState = { $inc: { bookedSeat: 1 } };
  const result = await ActivityStateModel.findByIdAndUpdate(id, updateState, {
    new: true,
  });
  return result;
};

const checkActivityStateStatusService = async (query: object) => {
  const selection = { activityId: 1, bookedSeat: 1, totalSeat: 1 };
  const result = await ActivityStateModel.find(query)
    .select(selection)
    .populate("activityId", { name: 1 });

  return result;
};

const overallSeatStatusService = async () => {
  const result = await ActivityStateModel.aggregate([
    {
      $group: {
        _id: new Date().toLocaleString(),
        totalSeat: { $sum: '$totalSeat' },
        totalBookedSeat: { $sum: '$bookedSeat' }
      }
    }
  ])
  return result
}

export {
  getActivityStateService,
  getActivityStateByActivityIdService,
  addActivityStateService,
  updateActivityStateByActivityIdService,
  bookSeatByActivityStateIdService,
  // unbookSeatActivityStateService,
  checkActivityStateStatusService,
  overallSeatStatusService,
};
