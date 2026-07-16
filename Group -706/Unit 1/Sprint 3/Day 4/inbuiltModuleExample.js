//Inbuilt modules are already there with Nodejs so if you've nodejs installed then you don't need to require or install those.

// const os = require('os')

// console.log(os.freemem())
// console.log(os.cpus())

 
// console.log(fs)

// let data = fs.readFileSync('./notes.txt', 'utf-8')
// console.log(data)

// // fs.writeFileSync('notes.txt', "Welcome to Nodejs")
// fs.appendFileSync('notes.txt', "\nWelcome to Nodejs")
// console.log("data has added")


// fs.readFile('notes.txt', "utf-8", (err, data)=>{
//     if(err){
//         console.log("Error while reading fine")
//     }

//     console.log(data)
// })


// let student = {
//     name:"Pawan Kumar",
//     age: 18,
//     city:"Noida"
// }

// fs.readFile('students.json', 'utf-8', (err, data)=>{
//     if(err){
//         console.log("Error While reading the file")
//         return
//     }

//     let students = JSON.parse(data)
//     students.push(student)

//     fs.writeFile('students.json', JSON.stringify(students, null, 2), (err)=>{
//         if(err){
//             console.log("error while writing the file")
//             return
//         }

//         console.log("Student has added...")
//     })
// })


//Student Task: Create employees.json and add two employees to it using fs module

//HTTP Module - using this module you can create server in nodejs

const http = require('http')

const server = http.createServer((req, res)=>{

        if(req.url == "/" && req.method=="GET"){
            res.end("Welcome to Home Page")
        }else if(req.url=="/about"  && req.method == "POST"){
            res.end("About Page")
        }else if(req.url == "/contact"){
            res.end("Contact Page")
        }else{
            res.end("Page Not Found")
        }
})

server.listen(8000, ()=>{
    console.log(`Server is running on http://localhost:8000`)
})

