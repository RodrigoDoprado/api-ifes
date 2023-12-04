/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotFoundError } from "../api/api-error"
import { studentRepository } from "../repository/StudentRepository"
import CourseService from "./CourseService"
import CurseService from "./CourseService"

class StudentService {
  public async index() {
    return await studentRepository.find({ relations: { course: true } })
  }

  public async create(enroll, firstName, lastName, avatar, course) {
    const buscaCurse = await new CurseService().show(course)
    if (!buscaCurse) {
      throw new NotFoundError("Curso Não Existe")
    }
    return await studentRepository.save(
      studentRepository.create({
        enroll,
        firstName,
        lastName,
        avatar,
        course,
      }),
    )
  }

  public async showSignIn(enroll) {
    if (enroll != undefined)
      return await studentRepository.findOneBy({ enroll })
  }

  public async show(id) {
    if (id != undefined) return await studentRepository.findOneBy({ id })
  }

  public async showEnroll(enroll) {
    if (enroll != undefined)
      return await studentRepository.findOne({
        relations: {
          course: true,
          // classEntity: true
        },
        where: {
          enroll,
        },
      })
  }

  public async update(firstName, lastName, avatar, id, course) {
    const buscaStudent = await this.show(id)
    const buscaCourse = await new CourseService().show(course)
    if (buscaStudent && buscaCourse) {
      const data = {
        firstName: firstName ? firstName : buscaStudent.firstName,
        lastName: lastName ? lastName : buscaStudent.lastName,
        avatar: avatar ? avatar : buscaStudent.avatar,
        course: course ? course : buscaStudent.course,
      }
      return await studentRepository.update(buscaStudent.id, data)
    }
  }

  public delete(id) {
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
    if (!siglaCurso) {
      throw new NotFoundError("Curso Não Existe")
    }
    const numeros = Math.floor(Math.random() * 10000)
    const enroll =
      anoAtual + "" + mesAtual + "" + siglaCurso.acronym + "" + numeros
    return enroll
  }
}
export default StudentService
