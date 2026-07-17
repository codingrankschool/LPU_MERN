const express = require('express')
const todoController = require("../controllers/todo.controller")

const todoRouter = express.Router()


todoRouter.post("/", todoController.addTodo)
todoRouter.get("/", todoController.getAllTodos)

// Implement below at home
// todoRouter.delete("/", todoController.getAllTodos)
// todoRouter.put("/", todoController.getAllTodos)

module.exports = todoRouter