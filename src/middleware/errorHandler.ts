import { NextFunction, Request, Response } from "express";

const errorHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
    res.send(err.message);
};

module.exports = errorHandler