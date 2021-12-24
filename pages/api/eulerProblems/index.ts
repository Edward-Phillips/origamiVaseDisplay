import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req:NextApiRequest, res:NextApiResponse) {
  try {
    const prisma = new PrismaClient()
    const eulerProblems = await prisma.eulerproblem.findMany()
    prisma.$disconnect();
    res.json(eulerProblems)
  } catch (error:any) {
    res.status(200).json({ error: error.message })
  }
}