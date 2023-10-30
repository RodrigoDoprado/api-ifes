/* eslint-disable @typescript-eslint/no-explicit-any */

import StudentService from "./StudentService"
import TeacherService from "./TeacherService"
import jwt from "jsonwebtoken"

class AuthService {
  public async signIn(email) {
    const buscaStudent = await new StudentService().showSignIn(email)
    const buscaTeacher = await new TeacherService().showSignIn(email)

    if (buscaStudent != undefined) {
      const token = jwt.sign(
        { id: buscaStudent.id },
        process.env.JWT_OFFICEB ?? "",
        { expiresIn: "1h" },
      )
      return token
    } else if (buscaTeacher != undefined) {
      const token = jwt.sign(
        { id: buscaTeacher.id },
        process.env.JWT_OFFICEB ?? "",
        { expiresIn: "1h" },
      )
      return token
    } else {
      const token = "asfkjkajsdfaç"
      return token
    }
  }
}
export default AuthService
