import "express-async-errors"
import express from "express"
import IndexRouter from "./routers/IndexRouter"

class App {
  public app: express.Application

  public constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  private middlewares() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
      res.header(
        "Access-Control-Allow-Headers",
        "X-PINGOTHER, Content-Type, Authorization",
      )
      next()
    })
  }

  private routes() {
    this.app.use("/file", express.static("uploads"))
    this.app.use(IndexRouter)
  }
}

export default new App().app
