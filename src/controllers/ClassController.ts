/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import ClassService from "../services/ClassService"

class ClassController {
  public async indexClass(req: Request, res: Response) {
    try {
      return res.status(200).json(await new ClassService().index())
    } catch (e) {
      res.status(404).json({ message: "Não há Turmas Cadastrado!" })
    }
  }

  public async getClass(req: Request, res: Response) {
    const { acronym } = req.params
    try {
      return res.status(200).json(await new ClassService().showAcronym(acronym))
    } catch (e) {
      res.status(404).json({ message: "Não há Turmas Cadastrado!" })
    }
  }

  public async createClass(req: Request, res: Response) {
    const { title, acronym, shift, state, course, period } = await req.body
    // try {
    await new ClassService()
      .create(title, acronym, shift, state, course, period)
      .then(() => {
        res.status(201).json({ message: "Turma Cadastrada com Sucesso" })
      })
    // } catch (e) {
    //   res.status(404).json({ message: "Curso não Cadastrado com Sucesso!" })
    // }
  }

  public async updateClass(req: Request, res: Response) {
    const { title, acronym, shift, state, course, period } = await req.body
    const { id } = req.params
    // try {
    new ClassService()
      .update(title, acronym, shift, state, course, period, id)
      .then(() => {
        return res.status(200).json({ message: "Turma Alterado com Sucesso!" })
      })
    // } catch (e) {
    //   return res.status(404).json({ message: "Turma não Alterado!" })
    // }
  }

  async deleteClass(req: Request, res: Response) {
    const { id } = req.params
    try {
      new ClassService().delete(id)
      return res.status(200).json({ message: "Turma deletado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Turma não Deletado!" })
    }
  }
}
export default ClassController
