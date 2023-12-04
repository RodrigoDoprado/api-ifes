/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
import { NotFoundError } from "../api/api-error"
import { classRepository } from "../repository/ClassRepository"
import CourseService from "./CourseService"

class ClassService {
  public async index() {
    // return await classRepository.find({relations: { period: true }})
  }

  public async create(title, acronym, shift, state, course, period) {
    const buscaCurse = await new CourseService().show(course)
    const buscaPeriod = await new CourseService().show(period)
    if (!buscaCurse) {
      throw new NotFoundError("Curso Não Existe!")
    }
    if (!buscaPeriod) {
      throw new NotFoundError("Periodo Não Existe!")
    }
    // return await classRepository.save(classRepository.create({title,acronym,shift,state,course,period}),)
  }

  public async showAcronym(id) {
    if (acronym != undefined)
      return await classRepository.findOne({
        where: { id },
        //relations: { teacher: true },
      })
  }

  public async show(id) {
    // if (id != undefined) return await classRepository.findOne({relations: { period: true },where:{id}})
  }

  public async update(title, acronym, shift, state, course, period, id) {
    const buscaClass = await this.show(id)
    // const buscaCurse = await new CourseService().show(course)
    // const buscaPeriod = await new PeriodService().show(period)

    // if (!buscaClass) {throw new NotFoundError("Turma Não Existe!")}
    // if (!buscaCurse) {throw new NotFoundError("Curso Não Existe!")}
    // if (!buscaPeriod) {throw new NotFoundError("Periodo Não Existe!")}
    // const data = {
    //   title: title ? title : buscaClass.title,
    //   acronym: acronym ? acronym : buscaClass.acronym,
    //   shift: shift ? shift : buscaClass.shift,
    //   state: state ? state : buscaClass.state,
    //   course: course ? course : buscaClass.course,
    //   period: period ? period : buscaClass.period
    // }
    // return await classRepository.update(buscaClass.id, data)
  }

  public delete(id: any) {
    classRepository.delete(id)
  }
}
export default ClassService
