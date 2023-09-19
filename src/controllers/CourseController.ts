/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import CurseService from "../services/CourseService"

class CourseController {
  public async indexCourse(req: Request, res: Response) {
    try {
      return res.status(200).json(await new CurseService().index())
    } catch (e) {
      res.status(404).json({ message: "Não há Cursos Cadastrado " + e })
    }
  }

  public async getByIdCourse(req: Request, res: Response) {}

  public async createStudent(req: Request, res: Response) {
    const { title, acronym } = await req.body
    try {
      await new CurseService().create(title, acronym)
      res.status(201).json({ message: "Curso Cadastrado com Sucesso" })
    } catch (e) {
      res.status(404).json({ message: "Curso não Cadastrado com Sucesso " + e })
    }
  }

  public async updateCourse(req: Request, res: Response) {
    const { title, acronym } = await req.body
    const { id } = req.params
    try {
      new CurseService().update(title, acronym, id)
      return res.status(200).json({ message: "Curso Alterado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Curso não Alterado " + e })
    }
  }

  // async putAddressStore(req: Request, res: Response) {
  //   const {uf,city,neighborhood,road,number,zipCode}=req.body
  //   try {
  //     const data={
  //       uf:uf ? uf :req.store.address?,
  //       avatar:avatar ? avatar : req.store.avatar,
  //       cnpj:cnpj ? cnpj : req.store.cnpj,
  //     }
  //     await storeRepository.update(req.store.id,{
  //       address:uf
  //     })
  //     return res.status(200).json({message: "Store Alterado com Sucesso!" })
  //   } catch (error) {return res.status(500).json({ error: error, message: "Internal Server Error" })}
  // }

  async deleteCourse(req: Request, res: Response) {
    //   try {
    //     await storeRepository.delete(req.store.id)
    //         return res.status(200).json({ message: "Loja deletado com Sucesso!" })
    //   } catch (error) {
    //     return res
    //       .status(500)
    //       .json({ error: error, message: "Internal Server Error" })
    //   }
  }
}
export default CourseController
