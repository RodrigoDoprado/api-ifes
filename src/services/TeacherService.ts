/* eslint-disable @typescript-eslint/no-explicit-any */
import { teacherRepository } from "../repository/TeacherRepository"
import CourseService from "./CourseService"

class TeacherService {
  public async index() {
    return await teacherRepository.find()
  }

  public async create(enroll, firstName, lastName, avatar) {
    return await teacherRepository.save(
      teacherRepository.create({ enroll, firstName, lastName, avatar }),
    )
  }

  public async showSignIn(enroll) {
    if (enroll != undefined)
      return await teacherRepository.findOneBy({ enroll })
  }

  public async show(id) {
    if (id != undefined) return await teacherRepository.findOneBy({ id })
  }

  public async showEnroll(enroll) {
    if (enroll != undefined)
      return await teacherRepository.findOne({ where: { enroll } }) //relations: {course: true,},
  }

  public async update(firstName, lastName, avatar, id, course) {
    const buscaTeacher = await this.show(id)
    const buscaCurse = await new CourseService().show(course)
    if (buscaCurse) {
      if (buscaTeacher) {
        const data = {
          firstName: firstName ? firstName : buscaTeacher.firstName,
          lastName: lastName ? lastName : buscaTeacher.lastName,
          avatar: avatar ? avatar : buscaTeacher.avatar,
          course: course ? course : buscaTeacher.course,
        }
        return await teacherRepository.update(buscaTeacher.id, data)
      }
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
