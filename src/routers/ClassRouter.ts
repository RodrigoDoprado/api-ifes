import { Router } from "express"
import ClassController from "../controllers/ClassController"

class ClassRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.get("/classes", new ClassController().indexClass)
    this.routes.get("/class/:acronym", new ClassController().getClass)
    this.routes.post("/class", new ClassController().createClass)
    this.routes.put("/class/:id", new ClassController().updateClass)
    this.routes.delete("/class/:id", new ClassController().deleteClass)
  }
}

export default new ClassRouter().routes
