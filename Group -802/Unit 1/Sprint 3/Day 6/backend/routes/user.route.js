const express = require('express')
const userController = require('../controllers/user.controller')
const authMiddleware = require("../middlewares/auth.middleware")

const userRouter = express.Router()


userRouter.post("/", userController.register)
userRouter.post("/login", userController.login)
userRouter.get("/", authMiddleware.authT , userController.getAllUsers)

module.exports = userRouter