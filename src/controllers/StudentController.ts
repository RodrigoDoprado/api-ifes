/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import StudentService from "../services/StudentService"

class StudentController {
  public async indexStudent(req: Request, res: Response) {
    try {
      return res.status(200).json(await new StudentService().index())
    } catch (e) {
      res.status(404).json({ message: "Não há Aluno Cadastrado!" })
    }
  }

  public async showStudent(req: Request, res: Response) {
    try {
      return res.status(200).json({ student: req.student })
    } catch (e) {
      res.status(404).json({ message: "Não há Aluno Cadastrado!" })
    }
  }

  public async createStudent(req: Request, res: Response) {
    const { firstName, lastName, avatar, course } = await req.body
    try {
      const enroll = await new StudentService().generateEnroll(course)
      await new StudentService().create(
        enroll,
        firstName,
        lastName,
        avatar,
        course,
      )
      res.status(201).json({ message: "Aluno Cadastrado com Sucesso" })
    } catch (e) {
      res.status(404).json({ message: "Aluno não Cadastrado com Sucesso" })
    }
  }

  public async updateStudent(req: Request, res: Response) {
    const { firstName, lastName, avatar, course } = await req.body
    const { id } = req.params
    try {
      new StudentService().update(firstName, lastName, avatar, id, course)
      return res.status(200).json({ message: "Aluno Alterado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Aluno não Alterado " + e })
    }
  }

  public async deleteStudent(req: Request, res: Response) {
    const { id } = req.params
    try {
      new StudentService().delete(id)
      return res.status(200).json({ message: "Aluno deletado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Aluno não Deletado " + e })
    }
  }
}
export default StudentController
