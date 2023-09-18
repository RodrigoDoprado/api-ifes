/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import StudentService from "../service/StudentService"

class StudentController {
  // static index: any;
  // static create: any;
  // static update: any;
  // static delete: any;

  // constructor(){
  //     this.index
  //     this.create
  //     this.update
  //     this.delete
  // }

  public async indexStudent(res: Response, req: Request) {
    const students = await new StudentService().index()
  }

  public async createStudent(res: Response, req: Request) {
    const { firstName, lastName } = await req.body
    console.log(firstName, lastName)
    // const students = await new StudentService().create(firstName,lastName)
  }

  public async updateStudent(res: Response, req: Request) {
    const { firstName, lastName } = req.body
    const students = await new StudentService().update(firstName, lastName)
  }

  public async deleteStudent(res: Response, req: Request) {
    const { id } = req.params
    const students = await new StudentService().delete(id)
  }
}
export default StudentController
