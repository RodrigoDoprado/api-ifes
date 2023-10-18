import { AppDataSource } from "../data-source"
import { SubjectEntiry } from "../entity/SubjectEntity"

export const subjectRepository = AppDataSource.getRepository(SubjectEntiry)
