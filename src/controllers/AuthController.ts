/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express"
import AuthService from "../services/AuthService"

class AuthController {
  public async createSignIn(req: Request, res: Response) {
    const { email } = await req.body
    try {
      const token = await new AuthService().signIn(email)
      res.status(200).json({ token })
    } catch (e) {
      res.status(404).json({ message: "Login ou Senha Invalido!" })
    }
  }
}
export default AuthController
