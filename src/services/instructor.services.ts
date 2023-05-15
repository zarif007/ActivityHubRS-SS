import mongoose from 'mongoose';
import { InstructorModel } from './../models/instructor.model';


/*   
   @service     finding instructors
*/
const getInstructorService = async (query:Object) => {
    const instructor = await InstructorModel.find(query);
    return instructor;
}
const getInstructorByIdService = async (id:string) => {
    const instructor = await InstructorModel.findById(id);
    return instructor;
}

/*   
   @service     adding instructors
*/
const addInstructorService = async (instructors:Object) => {
    const result = await InstructorModel.create(instructors);
    return result;
}


/*   
   @service     updating instructors
*/
const updateInstructorService = async (_id:mongoose.mongo.ObjectId,updatedValue:Object) => {
    
    const filter = {
        _id,
    }
    const controller = {
        new: true,
    }
    const result = await InstructorModel.findOneAndUpdate(filter,updatedValue,controller);
    return result;
}

export  {
    getInstructorService,
    getInstructorByIdService,

    addInstructorService,

    updateInstructorService
}
