import { StudentEntity } from "../entity/StudentEntity"
import { TeacherEntity } from "../entity/TeacherEntity"

declare global {
  namespace Express {
    export interface Request {
      student: Partial<StudentEntity>
      teacher: Partial<TeacherEntity>
    }
  }
}
