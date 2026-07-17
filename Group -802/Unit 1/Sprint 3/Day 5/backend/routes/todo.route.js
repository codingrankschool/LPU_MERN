const expres = require('express')
const todoController = require('../controllers/todo.controller')

const todoRouter = expres.Router()

todoRouter.post("/", todoController.addTodo)
todoRouter.get("/", todoController.getAllTodos)

module.exports = todoRouter