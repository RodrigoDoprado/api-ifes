import { AppDataSource } from "../data-source"
import { CourseEntity } from "../entity/CourseEntity"

export const courseRepository = AppDataSource.getRepository(CourseEntity)
