import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  let [student, setStudent] = useState({
    name: "",
    age: 0,
    city:""
  })



  let changeHandler = (e)=>{
    let{name, value} = e.target
    setStudent({
      ...student,
      [name]:value
    })

  }

  let saveStudentToDB = async(studentToSave)=>{
      try {
        let response = await fetch(`http://localhost:8000/students`, {
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify(studentToSave)
      })

      let data = await response.json()
      alert(data.msg)
      } catch (error) {
        console.log(error)
      }
  }

  let submitHandler = (e)=>{
      e.preventDefault()

      saveStudentToDB(student)
  }


  console.log(student)



  let formStyle = {
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    padding:"10px"
  }

  return (
    <div className="App">
      <h2>Welcome to Student Registration</h2>
      <hr />

      <form onSubmit={submitHandler} style={formStyle}>

          <input onChange={changeHandler} name="name" type="text"  placeholder='Name'/>
          <input onChange={changeHandler} name="age" type="number"  placeholder='Age'/>
          <input onChange={changeHandler} name="city" type="text" placeholder='City'/>

          <input type="submit"  value="Register"/>

      </form>
    </div>
  );
}

export default App;
