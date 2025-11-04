import dotenv from "dotenv"
dotenv.config()

import { setupServer } from "./server"
import { initMongoConnection } from "./db/initMongoConnection"

const bootstrap = async () => {
  try {
    await initMongoConnection()
    await setupServer()
  } catch (e) {
    console.log("Error during setup", e)
  }
}

bootstrap()
