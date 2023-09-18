/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import StudentService from "../services/StudentService"

class StudentController {
  public async indexStudent(req: Request, res: Response) {
    try {
      return res.status(200).json(await new StudentService().index())
    } catch (e) {
      res.status(404).json({ message: "Não há Aluno Cadastrado " + e })
    }
  }

  public async getByIdStore(req: Request, res: Response) {}

  public async createStudent(req: Request, res: Response) {
    const { firstName, lastName, avatar } = await req.body
    try {
      await new StudentService().create(firstName, lastName, avatar)
      res.status(201).json({ message: "Aluno Cadastrado com Sucesso" })
    } catch (e) {
      res.status(404).json({ message: "Aluno não Cadastrado com Sucesso " + e })
    }
  }

  public async updateStudent(req: Request, res: Response) {
    const { firstName, lastName, avatar } = await req.body
    const { id } = req.params
    try {
      new StudentService().update(firstName, lastName, avatar, id)
      return res.status(200).json({ message: "Aluno Alterado com Sucesso!" })
    } catch (e) {
      return res.status(404).json({ message: "Aluno não Alterado " + e })
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

  async deleteStudent(req: Request, res: Response) {
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
export default StudentController
