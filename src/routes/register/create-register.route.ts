import type { FastifyInstance } from "fastify";
import { registerType } from "./register.dto";
import { prisma } from "../../services/prisma";

// FUNÇÃO PARA CRIAR UM REGISTRO
export function Create_register(app: FastifyInstance) {
  app.post<{ Body: registerType }>("/create", async (req, res) => {
    const { email, nome, senha } = req.body;

    // Verificar se os dados existem no corpo da requisição
    if (!email) {
      return res.status(404).send({ message: "email is required" });
    }
    if (!nome) {
      return res.status(404).send({ message: "nome is required" });
    }
    if (!senha) {
      return res.status(400).send({ message: "senha is required" });
    }

    // Criar registro
    try {
      const data = await prisma.register.create({
        data: {
          nome,
          email,
          senha,
        },
      });
      return res.status(200).send(data);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "server not responding, try again later" });
    }
  });
}
