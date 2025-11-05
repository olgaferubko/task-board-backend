import { Request, Response } from "express"
import { Board } from "../models/Board"
import { Card } from "../models/Card"

export const createBoard = async (req: Request, res: Response) => {
  const { name } = req.body

  const board = await Board.create({ name })
  res.status(201).json(board)
}

export const getBoard = async (req: Request, res: Response) => {
  const { id } = req.params

  const board = await Board.findById(id)
  if (!board) {
    return res.status(404).json({ message: "Board not found" })
  }

  const cards = await Card.find({ boardId: id }).sort({ order: 1 })

  res.json({ board, cards })
}

export const updateBoard = async (req: Request, res: Response) => {
  const { id } = req.params
  const { title } = req.body

  const board = await Board.findByIdAndUpdate(id, { title }, { new: true })
  if (!board) {
    return res.status(404).json({ message: "Board not found" })
  }

  res.json(board)
}

export const deleteBoard = async (req: Request, res: Response) => {
  const { id } = req.params

  await Card.deleteMany({ boardId: id })
  const board = await Board.findByIdAndDelete(id)

  if (!board) {
    return res.status(404).json({ message: "Board not found" })
  }

  res.json({ message: "Board deleted" })
}
