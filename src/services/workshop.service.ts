import { WorkshopModel } from "../models/workshop.model";

const getWorkshopService = async (query: Object) => {
  const workshops = await WorkshopModel.find(query);
  return workshops;
};

const addWorkshopService = async (seminar: Object) => {
  const result = await WorkshopModel.create(seminar);
  return result;
};



const registerStudentToWorkshopService = async (
  workshopId: string,
  studentId: string
) => {
    
};

export {
  getWorkshopService,
  addWorkshopService,
  registerStudentToWorkshopService,
};
