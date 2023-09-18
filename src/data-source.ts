import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "postgres",
  // url: process.env.DB_URL,
  host: process.env.DB_HOST,
  database: process.env.DB_DATA,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  entities: [`${__dirname}/**/entity/*.{ts,js}`],
  migrations: [`${__dirname}/**/migration/*.{ts,js}`],
})
