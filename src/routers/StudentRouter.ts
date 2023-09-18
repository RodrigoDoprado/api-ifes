import { Router } from "express"
import StudentController from "../controller/StudentController"

class StoreRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.get("/student", new StudentController().indexStudent)
    this.routes.post("/student", new StudentController().createStudent)
    // this.routes.get("/store/:id", new StudentController.index())
    this.routes.put("/student", new StudentController().updateStudent)
    this.routes.delete("/student", new StudentController().deleteStudent)
  }
}

export default new StoreRouter().routes
