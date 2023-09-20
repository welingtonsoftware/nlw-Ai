import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPromnptsRoute(app: FastifyInstance) {
  app.get('/prompts', async () => {
    const prompts = await prisma.promnpt.findMany()
    return prompts
  })
}