/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import PeriodService from "../services/PeriodService"

class PeriodController {
  public async indexPeriod(req: Request, res: Response) {
    const { course } = req.params
    try {
      return res.status(200).json(await new PeriodService().index(course))
    } catch (e) {
      res.status(404).json({ message: "Não há Periodos Cadastrados!" })
    }
  }
  public async createPeriod(req: Request, res: Response) {
    const { title, course } = await req.body
    try {
      await new PeriodService().create(title, course)
      res.status(201).json({ message: "Periodo Cadastrado com Sucesso" })
    } catch (e) {
      res.status(404).json({ message: "Periodo não Cadastrado com Sucesso!" })
    }
  }
  public async getPeriod(req: Request, res: Response) {}
  public async updatePeriod(req: Request, res: Response) {}
  public async deletePeriod(req: Request, res: Response) {}
}
export default PeriodController
