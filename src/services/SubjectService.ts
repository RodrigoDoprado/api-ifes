/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotFoundError } from "../api/api-error"
import { subjectRepository } from "../repository/SubjectRepository"
import PeriodService from "./PeriodService"

class SubjectService {
  public async index(id) {
    return await subjectRepository.find({ where: { period: { id } } }) //relations: {period: true,},
  }

  public async create(title, acronym, avatar, period) {
    if (!(await new PeriodService().show(period))) {
      throw new NotFoundError("Periodo Não Existe!")
    }

    return await subjectRepository.save(
      subjectRepository.create({ title, acronym, avatar, period }),
    )
  }

  public async show(id) {
    if (id != undefined) return await subjectRepository.findOneBy({ id })
  }

  public async update(title, acronym, id, avatar, period) {
    const buscaSubject = await this.show(id)
    if (buscaSubject) {
      if (await new PeriodService().show(period)) {
        const data = {
          title: title ? title : buscaSubject.title,
          acronym: acronym ? acronym : buscaSubject.acronym,
          avatar: avatar ? avatar : buscaSubject.avatar,
          period: period ? period : buscaSubject.period,
        }
        return await subjectRepository.update(buscaSubject.id, data)
      }
    }
  }

  public delete(id: any) {
    subjectRepository.delete(id)
  }
}
export default SubjectService
