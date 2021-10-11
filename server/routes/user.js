import express from "express";
const router = express.Router();

//user authentication route
import { signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);

export default router;