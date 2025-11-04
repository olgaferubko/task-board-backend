import { Router } from "express"
import {
  createCard,
  updateCard,
  deleteCard,
  moveCard
} from "../controllers/cards"

const router = Router()

router.post("/", createCard)
router.patch("/:id", updateCard)
router.delete("/:id", deleteCard)
router.patch("/:id/move", moveCard)

export default router
