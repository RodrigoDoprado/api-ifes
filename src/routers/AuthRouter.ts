import { Router } from "express"
import AuthController from "../controllers/AuthController"

class AuthRouter {
  public routes = Router()

  public constructor() {
    this.metodRoutes()
  }

  private metodRoutes() {
    this.routes.post("/auth/signIn", new AuthController().createSignIn)
  }
}

export default new AuthRouter().routes
