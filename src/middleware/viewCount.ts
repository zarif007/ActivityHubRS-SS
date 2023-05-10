import { NextFunction, Request, Response } from "express";

let count = 0;

const viewCount = (req:Request, res:Response, next:NextFunction) => {
    count++;
    console.log(count);
    next();
}

export default viewCount;