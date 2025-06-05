import { fastify } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { Create_register } from "./routes/register/create-register.route";
import { delete_register } from "./routes/delete-register.route";
import {list_register}from "./routes/list-register.route"

const app = fastify();

// Configuração do Swagger
app.register(swagger, {
  swagger: {
    info: {
      title: "Documentação da API",
      description: "API para gerenciamento de registros",
      version: "1.0.0",
    },
    host: "localhost:3333",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      { name: 'Register', description: 'Operações relacionadas a registros' }
    ]
  }
});

// Configuração do Swagger UI
app.register(swaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: 'list',
    deepLinking: false
  }
});

// Registro das rotas
app.register(Create_register, { prefix: "/register" });
app.register(delete_register, { prefix: "/register" });
app.register(list_register,{prefix:"/register"})

// Inicia o servidor
app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Servidor rodando em ${address}`);
  console.log(`📄 Swagger UI disponível em ${address}/docs`);
});