const express = require('express')
const fs = require('fs')
const cors = require('cors')
const fileName = 'students.json'


const server = express()
server.use(express.json())
server.use(cors())


server.get('/students', (req, res)=>{

    let students = JSON.parse(fs.readFileSync(fileName, 'utf-8'))
    res.send({msg: "Students fetched sucessfully", students: students})

})

server.post('/students', (req, res)=>{

    let students = JSON.parse(fs.readFileSync(fileName, 'utf-8'))
    students.push(req.body)
    fs.writeFileSync(fileName, JSON.stringify(students, null, 2))

    res.send({msg: "Student Created sucessfully"})
})

server.listen(8000, ()=>{
    console.log(`Server is running on http://localhost:8000/`)
})