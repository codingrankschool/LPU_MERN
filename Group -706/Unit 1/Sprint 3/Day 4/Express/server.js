const express = require('express')
const fs = require('fs')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())


server.get('/', (req, res)=>{
    res.send({msg: "Welcome to Express SERVER"})
})

server.get("/students", (req, res)=>{

    let students = JSON.parse(fs.readFileSync('students.json', 'utf-8'))
    res.status(200).send({msg: "Students fetched successfully", students: students})

})

server.post("/students", (req, res)=>{
    let student = req.body
    let students = JSON.parse(fs.readFileSync('students.json', 'utf-8'))
    students.push(student)

    fs.writeFileSync('students.json', JSON.stringify(students, null, 2))
    res.status(201).send({msg:"Student added successfully", student: student})
    
})

server.listen(8000, ()=>{
    console.log(`Server has started on http://localhost:8000/`)
})