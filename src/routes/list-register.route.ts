import type { FastifyInstance } from "fastify";
import {prisma} from "../services/prisma"

export function list_register(app:FastifyInstance){
    app.get("/list",async(req,res)=>{
        try {
            const data = await
             prisma.register.findMany()
             return res.status(200).send(data)
        } catch (error) {
            return res.status(500).send({message:"erro in server"})
        }
    })
}