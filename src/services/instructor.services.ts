import mongoose from 'mongoose';
import { InstructorModel } from './../models/instructor.model';

const getInstructorService = async () => {
    const instructor = await InstructorModel.find({});
    return instructor;
}
const getInstructorByIdService = async (id:mongoose.mongo.ObjectId) => {
    const instructor = await InstructorModel.find({_id:id});
    return instructor;
}

const addInstructorService = async (instructor:JSON) => {
    const result = await InstructorModel.insertMany(instructor);
    return result;
}


export  {
    getInstructorService,
    getInstructorByIdService,
    addInstructorService,
}
