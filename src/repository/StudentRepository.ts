import { AppDataSource } from "../data-source"
import { StudentEntity } from "../entity/StudentEntiry"

export const studentRepository = AppDataSource.getRepository(StudentEntity)
