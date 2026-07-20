const express = require('express')
const {getAllUsers} = require("../controllers/user.contorller")
const {authT, authR} = require('../middlewares/auth.middleware')

const userRouter = express.Router()

userRouter.get("/",authT, authR(["admin", "user"]), getAllUsers)


module.exports = userRouter