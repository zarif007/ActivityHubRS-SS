import { SeminarModel } from "../models/seminar.model";

const getSeminarService = async (query: Object) => {
  const seminars = await SeminarModel.find(query);
  return seminars;
};

const addSeminarService = async (seminar: Object) => {
  const result = await SeminarModel.create(seminar);
  return result;
};

export { getSeminarService, addSeminarService };
