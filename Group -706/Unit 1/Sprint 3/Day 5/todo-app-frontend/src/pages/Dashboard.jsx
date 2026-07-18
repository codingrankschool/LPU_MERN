import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoCard from "../components/TodoCard";
import api from "../services/api";

function Dashboard() {

    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);

    const fetchTodos = async () => {

        const data = await api.getTodos();

        if (data.status) {
            setTodos(data.todos);
        }

    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (

        <>

            <Navbar />

            <div className="container">

                <TodoForm
                    fetchTodos={fetchTodos}
                    editingTodo={editingTodo}
                    setEditingTodo={setEditingTodo}
                />

                <hr />

                <br />

                {
                    todos.length === 0 ?

                        <h3>No Todos Found</h3>

                        :

                        todos.map((todo) => (

                            <TodoCard
                                key={todo._id}
                                todo={todo}
                                fetchTodos={fetchTodos}
                                setEditingTodo={setEditingTodo}
                            />

                        ))
                }

            </div>

        </>

    );

}

export default Dashboard;