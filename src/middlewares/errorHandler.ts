import { Request, Response, NextFunction } from "express"
import { HttpError } from "http-errors"

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {

  if (err && typeof err === "object" && (err as any).name === "ValidationError") {
    const validationErr = err as any
    return res.status(400).json({
      status: 400,
      message: validationErr.message,
      data: validationErr.errors
    })
  }

  if (err instanceof HttpError) {
    return res.status(err.statusCode || 500).json({
      status: err.statusCode,
      message: err.message
    })
  }

  const errorMessage =
    err instanceof Error ? err.message : "Unknown server error"

  res.status(500).json({
    status: 500,
    message: "Something went wrong",
    error: errorMessage
  })
}
