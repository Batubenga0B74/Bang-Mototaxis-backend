import type { FastifyInstance } from "fastify";
import { registerType } from "./register.dto";
import { prisma } from "../../services/prisma";

// FUNCAO PARA CRIAR UM RESGISTO
export function Create_register(app:FastifyInstance){
    app.post<{Body:registerType}>("/create",async(req,res)=>{
        const {email,marca_moto,matricula,nome,BI,telefone}= req.body
        //verificar se os dados existem no corpo da requisiçao
        if(!email)res.status(404).send({message:" email is required"})
            if(!marca_moto)res.status(404).send({message:"marca da moto is required"})
               if(!matricula)res.status(404).send({message:"matricula is required"})
                    if(!nome)res.status(404).send({message:"nome is required"})
                        if(!BI)res.status(404).send({message:"BI is required"})
                            if(!telefone)res.status(404).send({message:"telefone is required"})
        //CRIAR  REGISTROS
   try {
    const data = await prisma.register.create({
        data: {
          nome,
          telefone,
          marca_moto,
          BI,
          email,
          matricula,
        },
      });return res.status(200).send(data)
   } catch (error) {
    return res.status(404).send({menssage:"server not responding, try again later"})
   }
                
    })
}