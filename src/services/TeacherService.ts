/* eslint-disable @typescript-eslint/no-explicit-any */
import { teacherRepository } from "../repository/TeacherRepository"
import SubjectService from "./SubjectService"

class TeacherService {
  public async index() {
    return await teacherRepository.find({ relations: { subjects: true } })
  }

  public async create(enroll, firstName, lastName, avatar, subjects) {
    const buscaSubject = await new SubjectService().show(subjects)
    if (buscaSubject) {
      return await teacherRepository.save(
        teacherRepository.create({
          enroll,
          firstName,
          lastName,
          avatar,
          subjects,
        }),
      )
    }
  }

  public async show(id) {
    if (id != undefined) return await teacherRepository.findOneBy({ id })
  }

  public async update(firstName, lastName, avatar, id, subject) {
    const buscaStudent = await this.show(id)
    if (buscaStudent) {
      const data = {
        firstName: firstName ? firstName : buscaStudent.firstName,
        lastName: lastName ? lastName : buscaStudent.lastName,
        avatar: avatar ? avatar : buscaStudent.avatar,
        subjects: subject ? subject : buscaStudent.subjects,
      }
      return await teacherRepository.update(buscaStudent.id, data)
    }
  }

  public delete(id: any) {
    teacherRepository.delete(id)
  }

  public async generateEnroll() {
    const anoAtual = new Date().getFullYear()
    let mesAtual = new Date().getMonth()
    if (mesAtual <= 6) {
      mesAtual = 1
    } else {
      mesAtual = 2
    }
    const siglaCurso = "PROF"
    const numeros = Math.floor(Math.random() * 10000)
    const enroll = anoAtual + "" + mesAtual + "" + siglaCurso + "" + numeros
    return enroll
  }
}
export default TeacherService
