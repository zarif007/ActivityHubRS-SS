import { ActivityRegistrationModel } from "../models/activityRegistration.model";

// Fetching registrations based on query (default {} => all)
const getRegistrationsService = async (query: object) => {
  const registrations = await ActivityRegistrationModel.find(query)
    .populate("studentId")
    .populate("activityId");

  return registrations;
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
};
