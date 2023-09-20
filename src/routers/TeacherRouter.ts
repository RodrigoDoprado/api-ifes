import { Router } from "express"
import TeacherController from "../controllers/TeacherController"

class TeacherRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.get("/teachers", new TeacherController().indexTeacher)
    this.routes.post("/teacher", new TeacherController().createTeacher)
    this.routes.put("/teacher/:id", new TeacherController().updateTeacher)
    this.routes.delete("/teacher", new TeacherController().deleteTeacher)
  }
}

export default new TeacherRouter().routes
