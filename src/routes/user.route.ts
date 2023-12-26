import { Router, Request, Response } from "express";
import Users from "../db/models/users";


const userRouter = Router()

userRouter.get("/all-users", async(req:Request, res:Response) => {
    try {
        const usersData = await Users.find()
        return res.status(200).send({message: "successfully get data", data: usersData})

    }
    catch(err) {
        return res.status(500).send({message: err})
    }
})


export default userRouter
