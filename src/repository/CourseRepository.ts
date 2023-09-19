import { AppDataSource } from "../data-source"
import { CourseEntity } from "../entity/CourseEntiry"

export const curseRepository = AppDataSource.getRepository(CourseEntity)
