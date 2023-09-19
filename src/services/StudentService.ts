/* eslint-disable @typescript-eslint/no-explicit-any */
import { studentRepository } from "../repository/StudentRepository"
import CurseService from "./CourseService"

class StudentService {
  public async index() {
    return await studentRepository.find()
  }

  public async create(enroll, firstName, lastName, avatar, course) {
    const buscaCurse = await new CurseService().show(course)
    return await studentRepository.save(
      await studentRepository.create({
        enroll,
        firstName,
        lastName,
        avatar,
        course: buscaCurse,
      }),
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

  public async generateEnroll(course) {
    const anoAtual = new Date().getFullYear()
    let mesAtual = new Date().getMonth()
    if (mesAtual <= 6) {
      mesAtual = 1
    } else {
      mesAtual = 2
    }
    const siglaCurso = await new CurseService().show(course)
    const numeros = Math.floor(Math.random() * 10000)
    const enroll =
      anoAtual + "" + mesAtual + "" + siglaCurso.acronym + "" + numeros
    return enroll
  }
}
export default StudentService
