/* eslint-disable @typescript-eslint/no-explicit-any */
import { courseRepository } from "../repository/CourseRepository"

class CurseService {
  public async index() {
    return await courseRepository.find()
  }

  public async create(title, acronym) {
    //verificar se o curso exites
    return await courseRepository.save(
      await courseRepository.create({ title, acronym }),
    )
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
export default CurseService
