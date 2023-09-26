import { AppDataSource } from "../data-source"
import { ClassEntity } from "../entity/ClassEntiry"

export const classRepository = AppDataSource.getRepository(ClassEntity)
