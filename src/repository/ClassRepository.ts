import { AppDataSource } from "../data-source"
import { ClassEntity } from "../entity/ClassEntity"

export const classRepository = AppDataSource.getRepository(ClassEntity)
