import mongoose from "mongoose";
import { WorkshopInterface } from "../types/workshop";

const WorkshopSchema = new mongoose.Schema<WorkshopInterface>(
    {
        title: {
            type: String,
            required: true
        },
        facilitators: {
            type: [String],
            required: true
        },
        image:{
            type: String
        },
        venue:{
            type: String,
            default: 'Markuli Hall'
        },
        objective:{
            type: String,
            default: 'To Be Announced'
        },
        date:{
            type: String,
            default:'To Be Announced'
        },
        time:{
            type: String,
            default:'To Be Announced'
        },
        seatLimit:{
            type: Number,
            default: 0
        },
        registeredStudents:{
            type: [String],
            default: []
        }
    },
    {
        timestamps:true
    }
)
export const WorkshopModel = mongoose.model("Workshop", WorkshopSchema);