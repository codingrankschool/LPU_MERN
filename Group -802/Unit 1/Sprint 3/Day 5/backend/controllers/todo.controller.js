const Todo = require('../models/todo.model')

const todoController = {
    addTodo: async(req, res)=>{
        try {
            let newTodo = new Todo(req.body)
            await newTodo.save()
            res.status(201).send({msg:"Todo has added successfully", todo: newTodo})
        } catch (error) {
            res.status(400).send({msg:"Something Went Wrong While adding the todo", error: error})
        }
    },
    getAllTodos: async(req, res)=>{
        try {
            let allTodos = await Todo.find()
            res.status(201).send({msg:"Todos fetched successfully", todos: allTodos})
        } catch (error) {
            res.status(400).send({msg:"Something Went Wrong While gettting all todos", error: error})
        }
    }
}

module.exports = todoController