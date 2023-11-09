/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { UnauthorizedError } from "../api/api-error"
import StudentService from "../services/StudentService"
import TeacherService from "../services/TeacherService"

interface TokenPayload {
  id: string
  iat: number
  exp: number
}
export default async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authToken = req.headers.authorization

  if (!authToken) {
    throw new UnauthorizedError("Sessão não Autorizado")
  }
  const [, token] = authToken.split(" ")

  try {
    const { id } = jwt.verify(
      token,
      process.env.JWT_OFFICEB ?? "",
    ) as TokenPayload
    req.student = await new StudentService().showEnroll(id)
    req.teacher = await new TeacherService().showEnroll(id)
    return next()
  } catch (e) {
    throw new UnauthorizedError("Sessão não Autorizado")
  }
}
