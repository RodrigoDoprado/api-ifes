/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import { ApiError } from "../api/api-error"

export const ErrorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : "Internal Server Error"
  return res.status(statusCode).json({ message })
}
