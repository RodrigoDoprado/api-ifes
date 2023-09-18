/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import StoreService from "../services/StudentService"

class StudentController {
  
  public async indexStudent(req: Request, res: Response) {
    return res.status(200).json(await new StoreService().index())
  }
  
  public async createStudent(req: Request, res: Response) {
    const { firstName, lastName, avatar } = req.body
    console.log(firstName,lastName)
    await new StoreService().create(firstName, lastName, avatar)
  }

  public async getByIdStore(req: Request, res: Response) {}

  async updateStudent(req: Request, res: Response) {
    // const { firstName, avatar, cnpj } = req.body
    // try {
    //   if (req.employeeA) {
    //     const updateStore = await storeRepository.findOneBy(req.params)
    //     if (!updateStore) {
    //       return res.status(404).json({ message: "Produto Não Existente!" })
    //     }
    //     const data = {
    //       firstName: firstName ? firstName : updateStore.firstName,
    //       avatar: avatar ? avatar : updateStore.avatar,
    //       cnpj: cnpj ? cnpj : updateStore.cnpj,
    //     }
    //     await storeRepository.update(updateStore.id, data)
    //     return res.status(200).json({ message: "Store Alterado com Sucesso!" })
    //   } else {
    //     return res.status(404).json({ message: "Sessão não Autorizado" })
    //   }
    // } catch (error) {
    //   return res
    //     .status(500)
    //     .json({ error: error, message: "Internal Server Error" })
    // }
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
