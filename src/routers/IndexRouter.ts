import { Request, Response, Router } from "express"

class IndexRouter {
  public routes = Router()

  public constructor() {
    this.routesPublic()
  }

  private routesPublic() {
    this.routes.get("/", (req: Request, res: Response) =>
      res.send({ message: "Api de uma Aplicação IFES" }),
    )
    this.routes.get("/*", (req: Request, res: Response) =>
      res.send({ message: "Rota Não Existe" }),
    )
  }
}

export default new IndexRouter().routes
