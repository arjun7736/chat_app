import User from "../model/userModel.js"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

const signUp = async (req, res) => {
    try {
        const { username, phone, password } = req.body;
        if (!username.trim()) return res.status(400).json({ message: "Username Cannot Be Empty" })
        if (!password.trim()) return res.status(400).json({ message: "Password Cannot Be Empty" })
        if (!phone.length===0) return res.status(400).json({ message: "Phone Cannot Be Empty" })
            const existusername = await User.findOne({ username })
        if (existusername) {
            return res.status(400).json({ message: "Usernmae Already Exist" })
        }
        const existPhone=await  User.findOne({ phone });
        if (existPhone) {
            return res.status(400).json({ message: "phone Already Exist" })
        }
        const spass = await bcrypt.hash(password, 10)
        const user = new User({ username, phone, password: spass })
        await user.save()
        const token = jwt.sign({ username: username }, process.env.JWT_SECRET);
        const expire = new Date(Date.now() + 3600000)
        const { password: hashedPassword, ...rest } = user._doc;
        res.cookie("access_token", token, { httpOnly: true, expires: expire }).status(200).json(rest)
    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) return res.status(404).json({ message: "User not Fount" })
        const valiedPass = await bcrypt.compare(password, user.password)
        if (!valiedPass) return res.status(400).json({ message: "Invalied Credentials" })
        const expire = new Date(Date.now() + 3600000)
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET)
        const { password: hashedPassword, ...rest } = user._doc;
        res.cookie("access_token", token, { httpOnly: true, expires: expire }).status(200).json(rest)
    } catch (error) {
        console.log(error)
    }
}

export { login, signUp }