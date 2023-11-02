/* eslint-disable @typescript-eslint/no-explicit-any */
import { teacherRepository } from "../repository/TeacherRepository"

class TeacherService {
  public async index() {
    return await teacherRepository.find() /* { relations: { course:true } } */
  }

  public async create(enroll, firstName, lastName, avatar) {
    return await teacherRepository.save(
      teacherRepository.create({
        enroll,
        firstName,
        lastName,
        avatar,
      }),
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
      return await teacherRepository.findOne({
        // relations: {
        //   course: true,
        // },
        where: {
          enroll,
        },
      })
  }

  public async update(firstName, lastName, avatar, id) {
    const buscaStudent = await this.show(id)
    if (buscaStudent) {
      const data = {
        firstName: firstName ? firstName : buscaStudent.firstName,
        lastName: lastName ? lastName : buscaStudent.lastName,
        avatar: avatar ? avatar : buscaStudent.avatar,
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
