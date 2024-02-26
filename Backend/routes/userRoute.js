import express  from "express";
import { fetchUser, logOut, login, signUp } from "../controllers/userController.js";

const router = express.Router();

router.post('/login',login)
router.post('/signup',signUp)
router.get('/logout',logOut)
router.post('/fetchUser',fetchUser)

export default router