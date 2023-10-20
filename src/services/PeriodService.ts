/* eslint-disable @typescript-eslint/no-explicit-any */
import { periodRepository } from "../repository/PeriodRepository"
import CourseService from "./CourseService"

class PeriodService {
  public async index(acronym) {
    return await periodRepository.find({
      relations: {
        course: true,
      },
      where: {
        course: {
          acronym,
        },
      },
    })
  }

  public async create(title, course) {
    if (await new CourseService().show(course)) {
      return await periodRepository.save(
        periodRepository.create({ title, course }),
      )
    }
  }

  public async show(id) {
    if (id != undefined) return await periodRepository.findOneBy({ id })
  }

  public async update(id) {
    const buscaCurse = await this.show(id)
    if (buscaCurse) {
      const data = {}
      return await periodRepository.update(buscaCurse.id, data)
    }
  }

  public delete(id: any) {
    periodRepository.delete(id)
  }
}
export default PeriodService
