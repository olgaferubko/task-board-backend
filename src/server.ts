import express from "express"
import cors from "cors"
import { errorHandler } from "./middlewares/errorHandler"
import { notFoundHandler } from "./middlewares/notFoundHandler"

import boardsRoutes from "./routes/boards"
import cardsRoutes from "./routes/cards"

export async function setupServer() {
  const PORT = Number(process.env.PORT) || 5000
  const app = express()

  app.use(
    cors({
      origin: ["http://localhost:5173", "http://localhost:3000", "https://task-board-frontend-pi.vercel.app"],
      credentials: true
    })
  )

  app.use(express.json())

  app.use("/api/boards", boardsRoutes)
  app.use("/api/cards", cardsRoutes)

  app.use(notFoundHandler)
  app.use(errorHandler)

  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  })
}
