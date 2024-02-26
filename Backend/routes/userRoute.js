import express  from "express";
import { logOut, login, signUp } from "../controllers/userController.js";

const router = express.Router();

router.post('/login',login)
router.post('/signup',signUp)
router.get('/logout',logOut)

export default router