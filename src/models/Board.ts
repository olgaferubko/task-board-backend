import { Schema, model } from "mongoose"

export interface IBoard {
  name: string
  columns: string[]
}

const boardSchema = new Schema<IBoard>(
  {
    name: { type: String, required: true },
    columns: {
      type: [String],
      default: ["todo", "in-progress", "done"]
    }
  },
  { timestamps: true }
)

export const Board = model<IBoard>("Board", boardSchema)
