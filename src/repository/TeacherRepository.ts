import { AppDataSource } from "../data-source"
import { TeacherEntity } from "../entity/TeacherEntiry"

export const teacherRepository = AppDataSource.getRepository(TeacherEntity)
