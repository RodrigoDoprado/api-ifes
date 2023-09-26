/* eslint-disable @typescript-eslint/no-explicit-any */
import { subjectRepository } from "../repository/SubjectRepository"
import CourseService from "./CourseService"

class MatterService {
  public async index() {
    return await subjectRepository.find()
  }

  public async create(title, acronym, courses) {
    if (await new CourseService().show(courses)) {
      return await subjectRepository.save(
        subjectRepository.create({ title, acronym, courses }),
      )
    }
  }

  public async show(id) {
    if (id != undefined) return await subjectRepository.findOneBy({ id })
  }

  public async update(title, acronym, id) {
    const buscaCurse = await this.show(id)
    if (buscaCurse) {
      const data = {
        title: title ? title : buscaCurse.title,
        acronym: acronym ? acronym : buscaCurse.acronym,
      }
      return await subjectRepository.update(buscaCurse.id, data)
    }
  }

  public delete(id: any) {
    subjectRepository.delete(id)
  }
}
export default MatterService
