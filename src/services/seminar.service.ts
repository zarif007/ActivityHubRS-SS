import { SeminarModel } from "../models/seminar.model"

const getSeminarService = async ()=>{
    const seminars = await SeminarModel.find({})
    return seminars
}

export { getSeminarService }