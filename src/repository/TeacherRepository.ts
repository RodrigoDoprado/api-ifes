import { AppDataSource } from "../data-source"
import { TeacherEntity } from "../entity/TeacherEntity"

export const teacherRepository = AppDataSource.getRepository(TeacherEntity)
