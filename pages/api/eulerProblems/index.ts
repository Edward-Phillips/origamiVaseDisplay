import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req:NextApiRequest, res:NextApiResponse) {
  const prisma = new PrismaClient()
  const eulerProblems = await prisma.eulerProblem.findMany()
  prisma.$disconnect();
  res.json(eulerProblems)
}