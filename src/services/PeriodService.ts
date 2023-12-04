/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotFoundError } from "../api/api-error"
import { periodRepository } from "../repository/PeriodRepository"
import CourseService from "./CourseService"

class PeriodService {
  public async index(id) {
    return await periodRepository.find({ where: { course: { id } } }) //relations: {subjects: true},
  }

  public async create(title, course) {
    const buscaCurse = await new CourseService().show(course)
    if (!buscaCurse) {
      throw new NotFoundError("Curso Não Existe!")
    }
    // console.log(title,buscaCurse.id)
    return await periodRepository.save(
      periodRepository.create({ title, course }),
    )
  }

  public async show(id) {
    if (id != undefined) return await periodRepository.findOneBy({ id })
  }

  public async update(title, id) {
    const buscaCurse = await this.show(id)
    if (buscaCurse) {
      const data = {
        title: title ? title : buscaCurse.title,
      }
      return await periodRepository.update(buscaCurse.id, data)
    }
  }

  public delete(id: any) {
    periodRepository.delete(id)
  }
}
export default PeriodService
