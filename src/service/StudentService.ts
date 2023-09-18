/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotFoundError, SuccessfullyCreated } from "../api/api-error"
import { studentRepository } from "../repository/StudentRepository"

class StudentService {
  // static index: any
  // static create: any
  // static update: any
  // static delete: any

  // constructor(){
  //     this.index
  //     this.create
  //     this.update
  //     this.delete
  // }

  public async index() {
    studentRepository.find()
  }

  public async create(firstName: string, lastName: string) {
    await studentRepository
      .save(studentRepository.create({ firstName, lastName }))
      .then(() => {
        throw new SuccessfullyCreated("Aluno Cadastrado com Sucesso")
      })
      .catch(() => {
        throw new NotFoundError("Aluno não Cadastrado, Tente mais tarde")
      })
  }

  public async update(firstName, lastName) {}

  public async delete(id) {}
}
export default StudentService
