"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadRegistrationsService = exports.addRegistrationService = exports.getRegistrationsByActivityIdService = exports.getRegistrationByStudentIdService = exports.getRegistrationsService = void 0;
const activityRegistration_model_1 = require("../models/activityRegistration.model");
// Fetching registrations based on query (default {} => all)
const getRegistrationsService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const registrations = yield activityRegistration_model_1.ActivityRegistrationModel.find(query)
        .populate("studentId")
        .populate("activityId");
    return registrations;
});
exports.getRegistrationsService = getRegistrationsService;
const downloadRegistrationsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield activityRegistration_model_1.ActivityRegistrationModel.aggregate([
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
});
exports.downloadRegistrationsService = downloadRegistrationsService;
// Fetching registration based student id
const getRegistrationByStudentIdService = (studentId) => __awaiter(void 0, void 0, void 0, function* () {
    const registration = yield activityRegistration_model_1.ActivityRegistrationModel.find({ studentId });
    return registration;
});
exports.getRegistrationByStudentIdService = getRegistrationByStudentIdService;
// Fetching registration based activity id
const getRegistrationsByActivityIdService = (activityId) => __awaiter(void 0, void 0, void 0, function* () {
    const registrations = yield activityRegistration_model_1.ActivityRegistrationModel.find({ activityId });
    return registrations;
});
exports.getRegistrationsByActivityIdService = getRegistrationsByActivityIdService;
// Inserting registration
const addRegistrationService = (registration) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield activityRegistration_model_1.ActivityRegistrationModel.create(registration);
    return res;
});
exports.addRegistrationService = addRegistrationService;
