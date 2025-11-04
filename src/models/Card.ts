import { Schema, model, Types } from "mongoose"

export interface ICard {
  title: string
  description?: string
  boardId: Types.ObjectId
  column: "todo" | "in-progress" | "done"
  order: number
}

const cardSchema = new Schema<ICard>(
  {
    title: { type: String, required: true },
    description: { type: String },
    boardId: { type: Schema.Types.ObjectId, ref: "Board", required: true },
    column: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo"
    },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
)

export const Card = model<ICard>("Card", cardSchema)
