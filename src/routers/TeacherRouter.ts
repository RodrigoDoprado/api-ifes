import { Router } from "express"
import TeacherController from "../controllers/TeacherController"
import AuthMiddleware from "../middlewares/AuthMiddleware"

class TeacherRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.get("/teachers", new TeacherController().indexTeacher)
    this.routes.post("/teacher", new TeacherController().createTeacher)
    this.routes.get(
      "/teacher",
      AuthMiddleware,
      new TeacherController().showTeacher,
    )
    this.routes.put("/teacher/:id", new TeacherController().updateTeacher)
    this.routes.delete("/teacher/:id", new TeacherController().deleteTeacher)
  }
}

export default new TeacherRouter().routes
