import http from "http"
import app from "./app"
import { AppDataSource } from "./data-source"

AppDataSource.initialize()
  .then(() => {
    const url = process.env.URL
    const port = process.env.PORT
    const server = http.createServer(app)
    server.listen(port, () =>
      console.log("Api Funcionando, Host-> " + url + ":" + port),
    )
  })
  .catch((e) => {
    console.log(e + " Não há conexão com o banco de dados !!!")
  })

{
  /*"vercel-build":"npm run migration:run",*/
}
