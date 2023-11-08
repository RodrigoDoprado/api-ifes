/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import AuthService from "../services/AuthService"

class AuthController {
  public async createSignIn(req: Request, res: Response) {
    const { email } = await req.body
    try {
      res.status(200).json(await new AuthService().signIn(email))
    } catch (e) {
      res.status(404).json({ message: "Login ou Senha Invalido!" })
    }
  }
}
export default AuthController
