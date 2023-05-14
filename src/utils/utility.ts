import  mongoose  from 'mongoose';

// change string id to mongodb object id
export const convertToObjectId = (id:string) => {
    const objectId = new mongoose.mongo.ObjectId(id);
    return objectId;
}