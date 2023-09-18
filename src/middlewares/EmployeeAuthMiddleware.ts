// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { NextFunction, Request, Response } from "express"
// import jwt from "jsonwebtoken"
// import { employeeRepository } from "../repository/EmployeeRepository"
// import { UnauthorizedError } from "../api/api-error"

// interface TokenPayload {
//   id: string
//   iat: number
//   exp: number
// }
// export default async function EmployeeAuthMiddleware(
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) {
//   const authToken = req.headers.authorization

//   if (!authToken) {
//     throw new UnauthorizedError("Sessão não Autorizado")
//   }
//   const [, token] = authToken.split(" ")

//   try {
//     const { id } = jwt.verify(
//       token,
//       process.env.JWT_OFFICEA ?? "",
//     ) as TokenPayload
//     if (!(await employeeRepository.findOneBy({ id }))) {
//       throw new UnauthorizedError("Sessão não Autorizado")
//     }
//     const { password: _, ...newEmployee } = await employeeRepository.findOneBy({
//       id,
//     })
//     req.employee = newEmployee
//     return next()
//   } catch (e) {
//     throw new UnauthorizedError("Sessão não Autorizado")
//   }
// }
