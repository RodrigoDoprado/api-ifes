import { AppDataSource } from "../data-source"
import { PeriodEntity } from "../entity/PeriodEntity"

export const periodRepository = AppDataSource.getRepository(PeriodEntity)
