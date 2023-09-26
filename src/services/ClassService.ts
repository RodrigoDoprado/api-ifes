/* eslint-disable @typescript-eslint/no-explicit-any */
import { classRepository } from "../repository/ClassRepository"
import CourseService from "./CourseService"

class ClassService {
  public async index() {
    return await classRepository.find()
  }

  public async create(title, acronym, Shift, course) {
    const res = await new CourseService().show(course)
    if (res) {
      return await classRepository.save(
        classRepository.create({ title, acronym, Shift, course }),
      )
    }
  }

  public async show(id) {
    if (id != undefined) return await classRepository.findOneBy({ id })
  }

  public async update(title, acronym, id) {
    const buscaCurse = await this.show(id)
    if (buscaCurse) {
      const data = {
        title: title ? title : buscaCurse.title,
        acronym: acronym ? acronym : buscaCurse.acronym,
      }
      return await classRepository.update(buscaCurse.id, data)
    }
  }

  public delete(id: any) {
    classRepository.delete(id)
  }
}
export default ClassService
