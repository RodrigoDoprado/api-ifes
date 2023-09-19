import { Router } from "express"
import CourseController from "../controllers/CourseController"

class CourseRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.get("/courses", new CourseController().indexCourse)
    this.routes.post("/course", new CourseController().createStudent)
    this.routes.put("/course/:id", new CourseController().updateCourse)
    this.routes.delete("/course", new CourseController().deleteCourse)
  }
}

export default new CourseRouter().routes
