const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res)=>{
    

    //getting all students from students.json
    res.setHeader('Content-type', "application/json")
    if(req.url == "/students" && req.method == "GET"){
        let students= JSON.parse(fs.readFileSync('students.json', 'utf-8'))
        res.end(JSON.stringify({msg:"Students fetched successfully", students: students}))
    }
    else if(req.url == "/students" && req.method == "POST"){
        let bag = ''

        req.on('data', (chunk)=>{
            bag+=chunk
        })

        req.on('end', ()=>{
            let student = JSON.parse(bag)
            let students= JSON.parse(fs.readFileSync('students.json', 'utf-8'))
            students.push(student)

            fs.writeFileSync('students.json', JSON.stringify(students, null, 2))
            res.end(JSON.stringify({msg:"Student added successfully", student: student}))
        })
    }

})


server.listen(8000, ()=>{
    console.log(`Server is running on http://localhost:8000`)
})