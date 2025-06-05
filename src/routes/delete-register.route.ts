import { FastifyInstance } from "fastify";
import { prisma } from "../services/prisma";

export function delete_register(app: FastifyInstance) {
  app.delete<{ Params: { id: string } }>("/delete/:id", async (req, res) => {
    const { id } = req.params;
   //PROCURAR ID DO PRODUTO
   const verify = await prisma.register.findUnique({
    where:{
        id
    }
   })

   if(!verify?.id)return res.status(404).send({menssage:"employee not found"})
    await prisma.register.delete({
where:{
    id
}}).then(dd=>{
    return res.status(200).send({menssage:"sucessful deleted"})
})
  });
}
