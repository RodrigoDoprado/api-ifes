/* eslint-disable @typescript-eslint/no-explicit-any */

import { curseRepository } from "../repository/CourseRepository"

class CurseService {
  public async index() {
    return await curseRepository.find()
  }

  public async create(title, acronym) {
    //verificar se o curso exites
    return await curseRepository.save(
      await curseRepository.create({ title, acronym }),
    )
  }

  public async show(id) {
    return await curseRepository.findOneBy({ id })
  }

  public async update(title, acronym, id) {
    const buscaCurse = await this.show(id)
    if (buscaCurse) {
      const data = {
        title: title ? title : buscaCurse.title,
        acronym: acronym ? acronym : buscaCurse.acronym,
      }
      return await curseRepository.update(buscaCurse.id, data)
    }
  }

  public delete(id: any) {
    curseRepository.delete(id)
  }
}
export default CurseService
