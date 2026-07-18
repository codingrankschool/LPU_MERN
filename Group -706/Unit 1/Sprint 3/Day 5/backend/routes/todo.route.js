const express = require("express");

const todoRouter = express.Router();

const todoController = require("../controllers/todo.controller");
const authMiddleware = require("../middlewares/auth.middleware");

todoRouter.use(authMiddleware.authT);

todoRouter.post("/", todoController.addTodo);

todoRouter.get("/", todoController.getAllTodos);

todoRouter.get("/:id", todoController.getTodoById);

todoRouter.put("/:id", todoController.updateTodo);

todoRouter.delete("/:id", todoController.deleteTodo);

module.exports = todoRouter;