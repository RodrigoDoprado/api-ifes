import { Router } from "express"
import SubjectController from "../controllers/SubjectController"

class SubjectRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.get("/subjects/:idPerid", new SubjectController().indexSubject)
    this.routes.post("/subject", new SubjectController().createSubject)
    this.routes.put("/subject/:id", new SubjectController().updateSubject)
    this.routes.delete("/subject", new SubjectController().deleteSubject)
  }
}

export default new SubjectRouter().routes
