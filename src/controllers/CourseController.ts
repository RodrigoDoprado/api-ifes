/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import CourseService from "../services/CourseService"

class CourseController {
  public async indexCourse(req: Request, res: Response) {
    try {
      return res.status(200).json(await new CourseService().index())
    } catch (e) {
      res.status(404).json({ message: "Não há Cursos Cadastrado!" })
    }
  }

  public async getCourse(req: Request, res: Response) {
    const { acronym } = req.params
    try {
      return res
        .status(200)
        .json(await new CourseService().showAcronym(acronym))
    } catch (e) {
      res.status(404).json({ message: "Não há Cursos Cadastrado!" })
    }
  }

  public async createCourse(req: Request, res: Response) {
    const { title, acronym, avatar } = await req.body
    try {
      await new CourseService().create(title, acronym, avatar)
      res.status(201).json({ message: "Curso Cadastrado com Sucesso" })
    } catch (e) {
      res.status(404).json({ message: "Curso não Cadastrado com Sucesso!" })
    }
  }

  public async updateCourse(req: Request, res: Response) {
    const { title, acronym, avatar, teacher } = await req.body
    const { id } = req.params
    // try {
    new CourseService().update(title, acronym, id, avatar, teacher).then(() => {
      return res.status(200).json({ message: "Curso Alterado com Sucesso!" })
    })
    // } catch (e) {
    //   return res.status(404).json({ message: "Curso não Alterado!" })
    // }
  }

  async deleteCourse(req: Request, res: Response) {
    const { id } = req.params
    try {
      new CourseService().delete(id)
      return res.status(200).json({ message: "Curso deletado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Curso não Deletado!" })
    }
  }
}
export default CourseController
