import { AppDataSource } from "../data-source"
import { StudentEntity } from "../entity/StudentEntity"

export const studentRepository = AppDataSource.getRepository(StudentEntity)
