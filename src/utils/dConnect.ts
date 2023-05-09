import mongoose from "mongoose";

const dburi:any = process.env.DATABASE_URI;
const dbname:any = process.env.DATABASE_NAME;


let _db: any;

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${dburi+dbname}`);
        console.log(`Successfully connected to Database [${dbname}]`);
    } catch (err) {
        console.log(err);
    }
}

export const getDb = () => {
    return _db;
}

