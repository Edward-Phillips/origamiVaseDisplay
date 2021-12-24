import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req:NextApiRequest, res:NextApiResponse) {
  const prisma = new PrismaClient()
  console.log(process.env.DATABASE_URL);
  const eulerProblems = await prisma.eulerproblem.findMany()
  prisma.$disconnect();
  res.json(eulerProblems)
}