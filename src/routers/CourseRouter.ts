import { Router } from "express"
import CourseController from "../controllers/CourseController"

class CourseRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.get("/courses", new CourseController().indexCourse)
    this.routes.get("/course/:acronym", new CourseController().getCourse)
    this.routes.post("/course", new CourseController().createCourse)
    this.routes.put("/course/:id", new CourseController().updateCourse)
    this.routes.delete("/course/:id", new CourseController().deleteCourse)
  }
}

export default new CourseRouter().routes
