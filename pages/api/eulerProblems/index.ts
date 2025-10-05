import { NextApiRequest, NextApiResponse } from 'next'
import eulerProblemsData from '../../copilot/EulerProject/eulerProblemsData'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.json(eulerProblemsData)
  } catch (error: any) {
    res.status(200).json({ error: error.message })
  }
}