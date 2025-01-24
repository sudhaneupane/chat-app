import { Router } from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { getMessages, getUsersForSideBar, sendMessages } from "../controllers/message.controller.js";

const router = Router();

router.get("/users", protectRoute, getUsersForSideBar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessages);

export default router;
