/* eslint-disable @typescript-eslint/no-explicit-any */
import { courseRepository } from "../repository/CourseRepository"
import TeacherService from "./TeacherService"

class CourseService {
  public async index() {
    return await courseRepository.find()
  }

  public async create(title, acronym, teacher) {
    const buscaTeacher = await new TeacherService().show(teacher)
    if (buscaTeacher) {
      return await courseRepository.save(
        courseRepository.create({ title, acronym, teacher: buscaTeacher }),
      )
    }
  }

  public async show(id) {
    if (id != undefined) return await courseRepository.findOneBy({ id })
  }

  public async update(title, acronym, id) {
    const buscaCurse = await this.show(id)
    if (buscaCurse) {
      const data = {
        title: title ? title : buscaCurse.title,
        acronym: acronym ? acronym : buscaCurse.acronym,
      }
      return await courseRepository.update(buscaCurse.id, data)
    }
  }

  public delete(id: any) {
    courseRepository.delete(id)
  }
}
export default CourseService
