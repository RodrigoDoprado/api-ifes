import { AppDataSource } from "../data-source"
import { SubjectEntiry } from "../entity/SubjectEntiry"

export const subjectRepository = AppDataSource.getRepository(SubjectEntiry)
