/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import SubjectService from "../services/SubjectService"

class SubjectController {
  public async indexSubject(req: Request, res: Response) {
    try {
      return res.status(200).json(await new SubjectService().index())
    } catch (e) {
      res.status(404).json({ message: "Não há Materias Cadastrado " + e })
    }
  }

  public async getByIdSubject(req: Request, res: Response) {}

  public async createSubject(req: Request, res: Response) {
    const { title, acronym, avatar } = await req.body
    try {
      await new SubjectService().create(title, acronym, avatar)
      res.status(201).json({ message: "Materia Cadastrado com Sucesso" })
    } catch (e) {
      res
        .status(404)
        .json({ message: "Materia não Cadastrado com Sucesso " + e })
    }
  }

  public async updateSubject(req: Request, res: Response) {
    const { title, acronym, avatar } = await req.body
    const { id } = req.params
    try {
      new SubjectService().update(title, acronym, id, avatar)
      return res.status(200).json({ message: "Materia Alterado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Materia não Alterado " + e })
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

  async deleteSubject(req: Request, res: Response) {
    const { id } = req.params
    try {
      new SubjectService().delete(id)
      return res.status(200).json({ message: "Materia deletado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Materia não Deletado " + e })
    }
  }
}
export default SubjectController
