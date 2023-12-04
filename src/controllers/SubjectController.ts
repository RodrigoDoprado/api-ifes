/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import SubjectService from "../services/SubjectService"

class SubjectController {
  public async indexSubject(req: Request, res: Response) {
    const { idPerid } = req.params
    try {
      return res.status(200).json(await new SubjectService().index(idPerid))
    } catch (e) {
      res.status(404).json({ message: "Não há Materias Cadastrado!" })
    }
  }

  public async getByIdSubject(req: Request, res: Response) {}

  public async createSubject(req: Request, res: Response) {
    const { title, acronym, avatar, period } = await req.body
    // try {
    await new SubjectService()
      .create(title, acronym, avatar, period)
      .then(() => {
        res.status(201).json({ message: "Materia Cadastrado com Sucesso!" })
      })
    // } catch (e) {
    //   res.status(404).json({ message: "Materia não Cadastrado com Sucesso!" })
    // }
  }

  public async updateSubject(req: Request, res: Response) {
    const { title, acronym, avatar, period } = await req.body
    const { id } = req.params
    try {
      new SubjectService().update(title, acronym, id, avatar, period)
      return res.status(200).json({ message: "Materia Alterado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Materia não Alterado!" })
    }
  }

  async deleteSubject(req: Request, res: Response) {
    const { id } = req.params
    try {
      new SubjectService().delete(id)
      return res.status(200).json({ message: "Materia deletado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Materia não Deletado!" })
    }
  }
}
export default SubjectController
