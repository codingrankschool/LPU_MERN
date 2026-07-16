import logo from './logo.svg';
import './App.css';

import { useState , useEffect} from 'react';
import { response } from 'express';

function App() {

  let [student, setStudent] = useState({
    name:"",
    age:0,
    city:""

  })


  let changeHandler = (e)=>{
    let {name, value} = e.target

    setStudent({
      ...student,
      [name]:value
    })

  }
  console.log(student)


  let addStudent = async(studentToAdd)=>{
    let response = await fetch(`http://localhost:8000/students`, {
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(student)
    })

    let data = await response.json()
    console.log(data)
  }


  let submitHandler = (e)=>{
    e.preventDefault()

    addStudent(student)
    
  }

  let getStudentData = async()=>{
    let response = await fetch(`http://localhost:8000/students`)
    let data = await response.json()
    console.log(data)
  }


  useEffect(()=>{
        getStudentData()
  }, [])




  const formStyle = {
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    padding:"10px"
  }

  return (
    <div className="App">
      <h2>Student Registration</h2>
      <hr />

      {/* Form to get student data */}
      <form style={formStyle} onSubmit={submitHandler}>
          <input onChange={changeHandler} name="name" type="text" placeholder='Student Name' />
          <input onChange={changeHandler} name="age" type="number" placeholder='Student Age' />
          <input onChange={changeHandler} name="city" type="text" placeholder='Student City' />

          <input type="submit" value="Register Student" />
      </form>

    </div>
  );
}

export default App;
