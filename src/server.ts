import {fastify} from "fastify";
import {Create_register}from "./routes/register/create-register.route"

const app = fastify()
app.register(Create_register,{prefix:"Register"})

app.listen({port:3333 },()=>{console.log("server up")})