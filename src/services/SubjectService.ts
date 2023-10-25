/* eslint-disable @typescript-eslint/no-explicit-any */
import { subjectRepository } from "../repository/SubjectRepository"
import PeriodService from "./PeriodService"

class SubjectService {
  public async index(id) {
    return await subjectRepository.find({
      relations: {
        period: true,
      },
      where: {
        period: {
          id,
        },
      },
    })
  }

  public async create(title, acronym, avatar, period) {
    console.log(title, acronym, avatar, period)
    if (await new PeriodService().show(period)) {
      return await subjectRepository.save(
        subjectRepository.create({ title, acronym, avatar, period }),
      )
    }
  }

  public async show(id) {
    if (id != undefined) return await subjectRepository.findOneBy({ id })
  }

  public async update(title, acronym, id, avatar) {
    const buscaSubject = await this.show(id)
    if (buscaSubject) {
      const data = {
        title: title ? title : buscaSubject.title,
        acronym: acronym ? acronym : buscaSubject.acronym,
        avatar: avatar ? avatar : buscaSubject.avatar,
      }
      return await subjectRepository.update(buscaSubject.id, data)
    }
  }

  public delete(id: any) {
    subjectRepository.delete(id)
  }
}
export default SubjectService
