import { Router } from "express"
import StudentController from "../controllers/StudentController"
import AuthMiddleware from "../middlewares/AuthMiddleware"

class StudentRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.get("/students", new StudentController().indexStudent)
    this.routes.get(
      "/student/",
      AuthMiddleware,
      new StudentController().showStudent,
    )
    this.routes.post("/student", new StudentController().createStudent)
    this.routes.put("/student/:id", new StudentController().updateStudent)
    this.routes.delete("/student/:id", new StudentController().deleteStudent)
  }
}

export default new StudentRouter().routes
