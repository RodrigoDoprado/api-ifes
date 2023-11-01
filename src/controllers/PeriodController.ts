/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import PeriodService from "../services/PeriodService"

class PeriodController {
  public async indexPeriod(req: Request, res: Response) {
    const { acronym } = await req.params
    try {
      return res.status(200).json(await new PeriodService().index(acronym))
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
  public async updatePeriod(req: Request, res: Response) {
    const { title } = await req.body
    const { id } = req.params
    try {
      await new PeriodService().update(title, id)
      res.status(200).json({ message: "Periodo Alterado com Sucesso" })
    } catch (e) {
      res.status(404).json({ message: "Periodo não Alterado com Sucesso!" })
    }
  }
  public async deletePeriod(req: Request, res: Response) {
    const { id } = req.params
    try {
      new PeriodService().delete(id)
      return res.status(200).json({ message: "Periodo deletado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Periodo não Deletado!" })
    }
  }
}
export default PeriodController
