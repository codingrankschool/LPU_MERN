const mongoose = require("mongoose");
const Todo = require("../models/todo.model");

const todoController = {

    // Create Todo
    addTodo: async (req, res) => {

        try {

            const { title, priority } = req.body;

            if (!title || !priority) {
                return res.status(400).json({
                    status: false,
                    msg: "Title and Priority are required."
                });
            }

            const todo = await Todo.create({
                title,
                priority,
                user: req.user.id
            });

            return res.status(201).json({
                status: true,
                msg: "Todo created successfully.",
                todo
            });

        } catch (error) {

            return res.status(500).json({
                status: false,
                msg: "Something went wrong while creating todo.",
                error: error.message
            });

        }

    },

    // Get All Todos of Logged In User
    getAllTodos: async (req, res) => {

        try {

            const todos = await Todo.find({
                user: req.user.id
            })
            .populate("user", "name email")
            .sort({ createdAt: -1 });

            return res.status(200).json({
                status: true,
                total: todos.length,
                todos
            });

        } catch (error) {

            return res.status(500).json({
                status: false,
                msg: "Something went wrong while fetching todos.",
                error: error.message
            });

        }

    },

    // Get Todo By Id
    getTodoById: async (req, res) => {

        try {

            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {

                return res.status(400).json({
                    status: false,
                    msg: "Invalid Todo Id."
                });

            }

            const todo = await Todo.findOne({
                _id: id,
                user: req.user.id
            }).populate("user", "name email");

            if (!todo) {

                return res.status(404).json({
                    status: false,
                    msg: "Todo not found."
                });

            }

            return res.status(200).json({
                status: true,
                todo
            });

        } catch (error) {

            return res.status(500).json({
                status: false,
                msg: "Something went wrong while fetching todo.",
                error: error.message
            });

        }

    },

    // Update Todo
    updateTodo: async (req, res) => {

        try {

            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {

                return res.status(400).json({
                    status: false,
                    msg: "Invalid Todo Id."
                });

            }

            const todo = await Todo.findOneAndUpdate(
                {
                    _id: id,
                    user: req.user.id
                },
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

            if (!todo) {

                return res.status(404).json({
                    status: false,
                    msg: "Todo not found."
                });

            }

            return res.status(200).json({
                status: true,
                msg: "Todo updated successfully.",
                todo
            });

        } catch (error) {

            return res.status(500).json({
                status: false,
                msg: "Something went wrong while updating todo.",
                error: error.message
            });

        }

    },

    // Delete Todo
    deleteTodo: async (req, res) => {

        try {

            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {

                return res.status(400).json({
                    status: false,
                    msg: "Invalid Todo Id."
                });

            }

            const todo = await Todo.findOneAndDelete({
                _id: id,
                user: req.user.id
            });

            if (!todo) {

                return res.status(404).json({
                    status: false,
                    msg: "Todo not found."
                });

            }

            return res.status(200).json({
                status: true,
                msg: "Todo deleted successfully."
            });

        } catch (error) {

            return res.status(500).json({
                status: false,
                msg: "Something went wrong while deleting todo.",
                error: error.message
            });

        }

    }

};

module.exports = todoController;