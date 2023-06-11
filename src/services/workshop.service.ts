import { WorkshopModel } from "../models/workshop.model"


const getWorkshopService = async ()=>{
    const workshops = await WorkshopModel.find({})
    return workshops
}

const addWorkshopService = async (seminar: Object) => {
    const result = await WorkshopModel.create(seminar);
    return result;
}

export { getWorkshopService, addWorkshopService }