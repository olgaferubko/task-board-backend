import { Router } from "express"
import {
  createCard,
  updateCard,
  deleteCard,
  moveCard,
  getCardsByBoard
} from "../controllers/cards"

const router = Router()

router.get("/:boardId", getCardsByBoard)
router.post("/", createCard)
router.patch("/:id", updateCard)
router.patch("/:id/move", moveCard)
router.delete("/:id", deleteCard)

export default router
