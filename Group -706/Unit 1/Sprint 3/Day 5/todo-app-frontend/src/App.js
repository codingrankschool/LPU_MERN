import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

//GET: to get all todos: http://localhost:8000/todos/
//POST: to create new todo: http://localhost:8000/todos/

function App() {

  let [todos, setTodos] = useState([])
  let [todo, setTodo] = useState({
    title:"",
    priority:"",
    user:""
  })
  
  let fetchTodosData = async()=>{
      let response = await fetch(`http://localhost:8000/todos/`)
      let data = await response.json()

      setTodos(data.todos)
  }


  let addTodoToDB = async(todoToAdd)=>{
      let response = await fetch(`http://localhost:8000/todos/`, {
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(todoToAdd)
      })
      let data = await response.json()
      alert(data.msg)
      
      fetchTodosData()
  }



  useEffect(()=>{
      fetchTodosData()
  }, [])


  let changeHandler = (e)=>{

    setTodo({
      ...todo,
      [e.target.name]:e.target.value
    })

  }

  let submitHandler = (e)=>{

    e.preventDefault()
    addTodoToDB(todo)

  }

  let todoStyle = {
    border:"1px solid red",
    padding: "10px",
    textAlign:"center",
    borderRadius:"10px",
    margin:"10px"
  }

  let formStyle = {
    display:"flex",
    flexDirection:"column",
    gap:"10px",
    margin:"10px"
  }


  return (
    <div className="App">
     <h2>Welcome to Todo Application</h2>
     <hr />



    {/* Form to add todo or update todo */}

    <form style={formStyle}  onSubmit={submitHandler}>


        <input onChange={changeHandler} name="title" type="text" placeholder='Title'/>
        <input onChange={changeHandler} name="priority" type="text" placeholder='Priority'/>
        <input onChange={changeHandler} name="user" type="text" placeholder='User'/>

        <input type="submit" value="Add Todo" />

    </form>




     {/* List all the todos here */}
     <div className='list-todos'>

        {
          todos.map(({title, priority, user, _id})=>(
            <div style={todoStyle} key = {_id}>
              
              <h2>{title}</h2>
              <p><mark>{priority}</mark></p>
              <p>{user}</p>
              <button>Delete</button>
              <button>Update</button>


            </div>
          ))
        }

     </div>
    </div>
  );
}

export default App;
