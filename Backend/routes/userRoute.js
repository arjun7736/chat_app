import express  from "express";
import { login, signUp } from "../controllers/userController.js";

const router = express.Router();

router.post('/login',login)
router.post('/signup',signUp)

export default router