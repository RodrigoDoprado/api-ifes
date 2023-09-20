/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import TeacherService from "../services/TeacherService"

class TeacherController {
  public async indexTeacher(req: Request, res: Response) {
    try {
      return res.status(200).json(await new TeacherService().index())
    } catch (e) {
      res.status(404).json({ message: "Não há Professores Cadastrado " + e })
    }
  }

  public async getByIdTeacher(req: Request, res: Response) {}

  public async createTeacher(req: Request, res: Response) {
    const { firstName, lastName, avatar } = await req.body
    try {
      const enroll = await new TeacherService().generateEnroll()
      await new TeacherService().create(enroll, firstName, lastName, avatar)
      res.status(201).json({ message: "Professor Cadastrado com Sucesso" })
    } catch (e) {
      res
        .status(404)
        .json({ message: "Professor não Cadastrado com Sucesso " + e })
    }
  }

  public async updateTeacher(req: Request, res: Response) {
    const { firstName, lastName, avatar } = await req.body
    const { id } = req.params
    try {
      new TeacherService().update(firstName, lastName, avatar, id)
      return res
        .status(200)
        .json({ message: "Professor Alterado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Professor não Alterado " + e })
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

  async deleteTeacher(req: Request, res: Response) {
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
export default TeacherController
