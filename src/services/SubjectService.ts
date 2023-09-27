/* eslint-disable @typescript-eslint/no-explicit-any */
import { subjectRepository } from "../repository/SubjectRepository"

class SubjectService {
  public async index() {
    return await subjectRepository.find()
  }

  public async create(title, acronym, avatar) {
    return await subjectRepository.save(
      subjectRepository.create({ title, acronym, avatar }),
    )
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
