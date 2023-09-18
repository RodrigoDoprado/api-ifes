// import "express-async-errors"
import express from "express"

class App {
  public app: express.Application

  public constructor() {
    this.app = express()
    // this.middlewares()
    // this.routes()
  }

  // private middlewares() {
  //   this.app.use((req, res, next) => {
  //     res.header("Access-Control-Allow-Origin", "*")
  //     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "X-PINGOTHER, Content-Type, Authorization",
  //     )
  //     next()
  //   })
  //   this.app.use(bodyParser.json())
  //   this.app.use(express.json())
  //   this.app.use(morgan("dev"))
  //   this.app.use(cors())
  //   this.app.use(express.urlencoded({ extended: true }))
  //   this.app.use(ErrorMiddleware)
  // }

  // private routes() {
  //   this.app.use("/file", express.static("uploads"))
  //   this.app.use(EmployeeRouter)
  //   this.app.use(CategoryRouter)
  //   this.app.use(SigninRouter)
  //   this.app.use(StoreRouter)
  //   this.app.use(OfficeRouter)
  //   this.app.use(ProductRouter)
  //   this.app.use(IndexRouter)
  // }
}

export default new App().app
