import { Schema, model } from "mongoose"

export interface IBoard {
  title: string
  columns: string[]
}

const boardSchema = new Schema<IBoard>(
  {
    title: { type: String, required: true },
    columns: {
      type: [String],
      default: ["todo", "in-progress", "done"]
    }
  },
  { timestamps: true }
)

export const Board = model<IBoard>("Board", boardSchema)
