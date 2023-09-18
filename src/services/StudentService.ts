/* eslint-disable @typescript-eslint/no-explicit-any */
import { SuccessfullyCreated, NotFoundError } from "../api/api-error"
import { studentRepository } from "../repository/StudentRepository"

class StudentService {
  public async index() {
    return await studentRepository.find()
  }

  public async create(firstName, avatar, lastName) {
    await studentRepository.save(studentRepository.create({ firstName, avatar, lastName }),)
    .then(()=>{throw new SuccessfullyCreated("Aluno Cadastrado com Sucesso")})
    .catch(()=>{throw new NotFoundError("Aluno não Cadastrado, Tente mais Tarde")})
  }

  public async show(id) {
    return await studentRepository.findOneBy({ id })
  }

  public update(product) {
    studentRepository.save(product)
  }

  public delete(id: any) {
    studentRepository.delete(id)
  }
}
export default StudentService
