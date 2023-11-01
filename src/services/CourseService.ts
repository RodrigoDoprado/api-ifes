/* eslint-disable @typescript-eslint/no-explicit-any */
import { courseRepository } from "../repository/CourseRepository"
import TeacherService from "./TeacherService"

class CourseService {
  public async index() {
    return await courseRepository.find({ relations: { teacher: true } })
  }

  public async create(title, acronym, teacher, avatar) {
    const buscaTeacher = await new TeacherService().show(teacher)
    if (buscaTeacher) {
      return await courseRepository.save(
        courseRepository.create({
          avatar,
          title,
          acronym,
          teacher,
        }),
      )
    }
  }

  public async showAcronym(acronym) {
    if (acronym != undefined)
      return await courseRepository.findOne({
        where: { acronym },
        relations: { teacher: true },
      })
  }

  public async show(id) {
    if (id != undefined) return await courseRepository.findOneBy({ id })
  }

  public async update(title, acronym, id, avatar, teacher) {
    const buscaCurse = await this.show(id)
    const buscaTeacher = await new TeacherService().show(teacher)
    if (buscaCurse && buscaTeacher) {
      const data = {
        title: title ? title : buscaCurse.title,
        acronym: acronym ? acronym : buscaCurse.acronym,
        avatar: avatar ? avatar : buscaCurse.avatar,
        teacher: teacher ? teacher : buscaCurse.teacher,
      }
      return await courseRepository.update(buscaCurse.id, data)
    }
  }

  public delete(id: any) {
    courseRepository.delete(id)
  }
}
export default CourseService
