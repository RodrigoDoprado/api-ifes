/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import PeriodService from "../services/PeriodService"
import CourseService from "../services/CourseService"

class PeriodController {
  public async indexPeriod(req: Request, res: Response) {
    const { acronym } = await req.params
    try {
      const buscaCourse = await new CourseService().showAcronym(acronym)
      return res
        .status(200)
        .json(await new PeriodService().index(buscaCourse.id))
    } catch (e) {
      res.status(404).json({ message: "Não há Periodos Cadastrados!" })
    }
  }
  public async createPeriod(req: Request, res: Response) {
    const { title, course } = await req.body
    await new PeriodService().create(title, course).then(() => {
      res.status(201).json({ message: "Periodo Cadastrado com Sucesso" })
    })
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
