const Todo = require('../models/todo.model')


const todoController = {
    addTodo: async (req, res)=>{
        try {
            let newTodo = new Todo(req.body)
            await newTodo.save()
            res.status(201).send({status:true, msg:"Todo has created successfully", todo: newTodo})
        } catch (error) {
            res.status(400).send({status:false, msg:"Something went wrong while creating tood", error: error})
        }
    },
    getAllTodos: async (req, res)=>{
        try {
            let allTodos = await Todo.find();
            res.status(201).send({status:true, msg:"Todos have fetched successfully", todos: allTodos})
        } catch (error) {
            res.status(400).send({status:false, msg:"Something went wrong while getting all todos", error: error})
        }
    }
}

module.exports = todoController