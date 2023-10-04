/* eslint-disable @typescript-eslint/no-explicit-any */
import { courseRepository } from "../repository/CourseRepository"
import SubjectService from "./SubjectService"
import TeacherService from "./TeacherService"

class CourseService {
  public async index() {
    return await courseRepository.find({ relations: { teacher: true } })
  }

  public async create(title, acronym, teacher, subjects, avatar) {
    const buscaTeacher = await new TeacherService().show(teacher)
    const buscaSubject = await new SubjectService().show(subjects)
    if (buscaTeacher) {
      if (buscaSubject) {
        return await courseRepository.save(
          courseRepository.create({
            avatar,
            title,
            acronym,
            teacher,
            subjects,
          }),
        )
      }
    }
  }

  public async show(id) {
    if (id != undefined) return await courseRepository.findOneBy({ id })
  }

  public async update(title, acronym, id, avatar, subjects) {
    const buscaCurse = await this.show(id)
    const buscaSubject = await new SubjectService().show(subjects)
    if (buscaCurse) {
      if (buscaSubject) {
        const data = {
          title: title ? title : buscaCurse.title,
          acronym: acronym ? acronym : buscaCurse.acronym,
          avatar: avatar ? avatar : buscaCurse.avatar,
        }
        return await courseRepository.update(buscaCurse.id, data)
      }
    }
    return null
  }

  public delete(id: any) {
    courseRepository.delete(id)
  }
}
export default CourseService
