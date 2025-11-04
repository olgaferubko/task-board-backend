import { Router } from "express"
import {
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
} from "../controllers/boards"

const router = Router()

router.post("/", createBoard)
router.get("/:id", getBoard)
router.patch("/:id", updateBoard)
router.delete("/:id", deleteBoard)

export default router
