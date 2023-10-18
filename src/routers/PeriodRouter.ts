import { Router } from "express"
import PeriodController from "../controllers/PeriodController"

class PeriodRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.get("/periods/:course", new PeriodController().indexPeriod)
    this.routes.get("/period/:acronym", new PeriodController().getPeriod)
    this.routes.post("/period", new PeriodController().createPeriod)
    this.routes.put("/period/:id", new PeriodController().updatePeriod)
    this.routes.delete("/period/:id", new PeriodController().deletePeriod)
  }
}

export default new PeriodRouter().routes
