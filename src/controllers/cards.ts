import { Request, Response } from "express"
import { Card } from "../models/Card"

export const createCard = async (req: Request, res: Response) => {
  const { title, description, boardId, column } = req.body

  const lastCard = await Card.findOne({ boardId, column }).sort({ order: -1 })
  const order = lastCard ? lastCard.order + 1 : 0

  const card = await Card.create({ title, description, boardId, column, order })

  res.status(201).json(card)
}

export const updateCard = async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, description } = req.body

  const card = await Card.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  )

  if (!card) {
    return res.status(404).json({ message: "Card not found" })
  }

  res.json(card)
}

export const deleteCard = async (req: Request, res: Response) => {
  const { id } = req.params

  const card = await Card.findByIdAndDelete(id)
  if (!card) {
    return res.status(404).json({ message: "Card not found" })
  }

  res.json({ message: "Card deleted" })
}

export const moveCard = async (req: Request, res: Response) => {
  const { id } = req.params
  const { toColumn, newOrder } = req.body

  const card = await Card.findById(id)
  if (!card) {
    return res.status(404).json({ message: "Card not found" })
  }

  await Card.updateMany(
    { boardId: card.boardId, column: toColumn, order: { $gte: newOrder } },
    { $inc: { order: 1 } }
  )

  card.column = toColumn
  card.order = newOrder
  await card.save()

  res.json(card)
}


export const getCardsByBoard = async (req: Request, res: Response) => {
  const { boardId } = req.params

  try {
    const cards = await Card.find({ boardId }).sort({ order: 1 })
    res.json(cards)
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cards" })
  }
}
