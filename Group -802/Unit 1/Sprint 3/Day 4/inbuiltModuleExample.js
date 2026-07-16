// const os = require('os')

//There are lots of module inbuilt in nodes:
/*
os
fs
path
url
crypto
http
othrs
*/

// console.log(os.freemem())
// console.log(os.arch()) //free avalable memory

// const fs = require('fs')

// fs.writeFileSync('note.txt', "Hello Student")
// fs.writeFile('note.txt', "Hello Everyone", (err)=>{
//     if(err){
//         console.log("ERROR While writing the code", err)
//     }
//     console.log("File has written")
// })

// fs.appendFile('note.txt', "We are learning nodejs", (err)=>{

//      if(err){
//         console.log("ERROR While writing the code", err)
//     }
//     console.log("File has appended by some text")

// })

// const fs = require('fs')

// let student = {
//     id: 1,
//     name:"Chinki",
//     age: 23,
//     city: "Noida"
// }

// fs.readFile('students.json', 'utf-8', (err, data)=>{
//     let students = JSON.parse(data)
//     students.push(student)

//     fs.writeFile('students.json', JSON.stringify(students, null, 2), (err)=>{
//         if(err){
//             console.log("Error while writing the file", err)
//         }
//         console.log("File has successfully written")
//     })
// })

//HTTP: If you want to create backend server then you can use http module.
//SERVER - It accepts request and serve response.

const http = require("node:http");

const server = http.createServer((req, res) => {
  //Here req and res are javascript object
  res.setHeader("Content-type", "application/json");
  if (req.url == "/" && req.method == "POST") {
    res.end(JSON.stringify({ msg: "Welcome to Home page" }));
  } else if (req.url == "/about") {
    res.end({ "msg": "Welcome to About page" });
  } else if (req.url == "/contact") {
    res.end({ "msg": "Welcome to Contact page" });
  } else {
    res.end({ "msg": "Page Not Found" });
  }
}); 

server.listen(8000, () => {
  console.log("Server has started on port - 8000");
});
