import mongoose from "mongoose";

const dbUri:any = process.env.DATABASE_URI;
const dbName:any = process.env.DATABASE_NAME;


let _db: any;

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${dbUri}`,{dbName});
        console.log(`Successfully connected to Database [${dbName}]`);
    } catch (err) {
        console.log(err);
    }
}

export const getDb = () => {
    return _db;
}

