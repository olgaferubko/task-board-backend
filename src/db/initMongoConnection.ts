import mongoose from "mongoose"

export async function initMongoConnection() {
  const uri = process.env.MONGO_URI

  if (!uri) {
    throw new Error("MONGO_URI is missing in .env")
  }

  try {
    mongoose.set("strictQuery", true)

    console.log("Connecting to MongoDB...")
    await mongoose.connect(uri)

    console.log(`MongoDB connected: ${mongoose.connection.name}`)
  } catch (e) {
    console.error("MongoDB connection error:", e)
    process.exit(1)
  }
}
