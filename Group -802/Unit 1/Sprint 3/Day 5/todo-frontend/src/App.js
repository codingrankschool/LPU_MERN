import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {

  let [todos, setTodos] = useState([])

  let getAllTodos = async()=>{
    let response =  await fetch(`http://localhost:8000/todos/`)
    let data = await response.json()
    console.log(data.todos)

    setTodos(data.todos)
  }

  useEffect(()=>{
        getAllTodos()
  }, [])


  let todoStyle = {
    border:"1px solid red",
    padding:"10px",
    textAlign:"center",
    margin:"10px"
  }

  let formStyle = {
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    padding:"10px"
  }

  return (
    <div className="App">
      <h2>Welcome to Todo Application</h2>
      <hr />

      {/* Create Todo Form */}

      <form style={formStyle}>

          <input name="title" type="text" placeholder='Todo Title' />
          <input name="priority" type="text"  placeholder='Priority'/>
          <input name="user" type="text" placeholder='User'/>

          <input type="submit"  value="Add Todo"/>

      </form>


      {/* Todo List */}

      <div className='todos-items'>
        {
          todos.map(({title, user, priority, _id})=>(
            <div style={todoStyle} key={_id}>
                <h2>{title}</h2>
                <p>{priority}</p>
                <p>{user}</p>
            </div>

          ))
        }
      </div>

    </div>
  );
}

export default App;
