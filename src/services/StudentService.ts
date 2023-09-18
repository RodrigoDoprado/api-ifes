/* eslint-disable @typescript-eslint/no-explicit-any */
import { studentRepository } from "../repository/StudentRepository"

class StudentService {
  public async index() {
    return await studentRepository.find()
  }

  public async create(firstName, lastName, avatar) {
    return await studentRepository.save(
      await studentRepository.create({ firstName, lastName, avatar }),
    )
  }

  public async show(id) {
    return await studentRepository.findOneBy({ id })
  }

  public async update(firstName, lastName, avatar, id) {
    const buscaStudent = await this.show(id)
    if (buscaStudent) {
      const data = {
        firstName: firstName ? firstName : buscaStudent.firstName,
        lastName: lastName ? lastName : buscaStudent.lastName,
        avatar: avatar ? avatar : buscaStudent.avatar,
      }
      return await studentRepository.update(buscaStudent.id, data)
    }
  }

  public delete(id: any) {
    studentRepository.delete(id)
  }
}
export default StudentService
