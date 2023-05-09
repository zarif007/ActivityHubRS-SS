import { Request, Response } from "express"


export const getHome = (req:Request, res:Response) => {
    res.sendFile('index.html', { root: 'public' })
}