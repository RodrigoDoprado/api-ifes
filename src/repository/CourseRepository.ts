import { AppDataSource } from "../data-source"
import { CourseEntity } from "../entity/CourseEntiry"

export const courseRepository = AppDataSource.getRepository(CourseEntity)
