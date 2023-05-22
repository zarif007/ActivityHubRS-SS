import { ActivityRegistrationModel } from "../models/activityRegistration.model";

// Fetching registrations based on query (default {} => all)
const getRegistrationsService = async (query: object) => {
  const registrations = await ActivityRegistrationModel.find(query)
    .populate("studentId")
    .populate("activityId");

  return registrations;
};

const downloadRegistrationsService = async () => {

  const result = await ActivityRegistrationModel.aggregate([

    // {
    //   $group: {
    //     _id: "$activityId",
    //     studentIds: { $addToSet: "$studentId" }
    //   }
    // },
    // {
    //   $lookup: {
    //     from: "students",
    //     localField: "studentIds",
    //     foreignField: "_id",
    //     as: "students"
    //   }
    // },
    // {
    //   $lookup: {
    //     from: "activities",
    //     localField: "_id",
    //     foreignField: "_id",
    //     as: "activity"
    //   }
    // },
    // {
    //   $unwind: "$activity"
    // },
    // {
    //   $project: {
    //     _id: 0,
    //     activity: "$activity.name",
    //     students: {
    //       name: 1,
    //       email: 1,
    //       roomNumber:1,
    //       phoneNumber: 1,
    //       bngSection: 1,
    //     }
    //   }
    // }
    {
      $group: {
        _id: "$activityId",
        studentIds: { $addToSet: "$studentId" }
      }
    },
    {
      $lookup: {
        from: "students",
        localField: "studentIds",
        foreignField: "_id",
        as: "students"
      }
    },
    {
      $lookup: {
        from: "activities",
        localField: "_id",
        foreignField: "_id",
        as: "activity"
      }
    },
    {
      $unwind: "$activity"
    },
    {
      $project: {
        activity: "$activity.name",
        students: {
          $map: {
            input: "$students",
            as: "student",
            in: {
              $mergeObjects: [
                "$$student",
                {
                  sl: { $add: [{ $indexOfArray: ["$students", "$$student"] }, 1] }
                }
              ]
            }
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
        activity: 1,
        students: {
          sl: 1,
          name: 1,
          studentId: 1,
          email: 1,
          roomNumber: 1,
          phoneNumber: 1,
          bngSection: 1,
        }
      }
    }
  ]);

  return result;
};

// Fetching registration based student id
const getRegistrationByStudentIdService = async (studentId: string) => {
  const registration = await ActivityRegistrationModel.find({ studentId });
  return registration;
};

// Fetching registration based activity id
const getRegistrationsByActivityIdService = async (activityId: string) => {
  const registrations = await ActivityRegistrationModel.find({ activityId });
  return registrations;
};

// Inserting registration
const addRegistrationService = async (registration: any) => {
  const res = await ActivityRegistrationModel.create(registration);
  return res;
};

export {
  getRegistrationsService,
  getRegistrationByStudentIdService,
  getRegistrationsByActivityIdService,
  addRegistrationService,
  downloadRegistrationsService
};
