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
    const buscaStudent = await new StudentService().showEnroll(id)
    req.student = buscaStudent

    if (!buscaStudent) {
      const buscaTeacher = await new TeacherService().showEnroll(id)
      req.teacher = buscaTeacher
      return next()
    }

    return next()
  } catch (e) {
    throw new UnauthorizedError("Sessão não Autorizado")
  }
}
