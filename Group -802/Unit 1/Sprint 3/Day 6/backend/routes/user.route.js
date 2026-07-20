const express = require('express')
const userController = require('../controllers/user.controller')
const {authT, authR} = require("../middlewares/auth.middleware")

const userRouter = express.Router()


userRouter.post("/", userController.register)
userRouter.post("/login", userController.login)
userRouter.get("/", authT, authR(["admin", "user"]) , userController.getAllUsers)

module.exports = userRouter