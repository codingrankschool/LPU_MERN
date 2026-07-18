import { useEffect, useState } from "react";
import api from "../services/api";

function TodoForm({
    fetchTodos,
    editingTodo,
    setEditingTodo
}) {

    const [todo, setTodo] = useState({

        title: "",

        priority: "Medium"

    });

    useEffect(() => {

        if (editingTodo) {

            setTodo({

                title: editingTodo.title,

                priority: editingTodo.priority

            });

        }

    }, [editingTodo]);

    const changeHandler = (e) => {

        setTodo({

            ...todo,

            [e.target.name]: e.target.value

        });

    };

    const submitHandler = async (e) => {

        e.preventDefault();

        if (editingTodo) {

            const data = await api.updateTodo(

                editingTodo._id,

                todo

            );

            alert(data.msg);

            setEditingTodo(null);

        }

        else {

            const data = await api.addTodo(todo);

            alert(data.msg);

        }

        setTodo({

            title: "",

            priority: "Medium"

        });

        fetchTodos();

    };

    return (

        <>

            <h2>

                {

                    editingTodo ?

                        "Update Todo"

                        :

                        "Add Todo"

                }

            </h2>

            <form onSubmit={submitHandler}>

                <input

                    type="text"

                    name="title"

                    placeholder="Enter Todo"

                    value={todo.title}

                    onChange={changeHandler}

                />

                <select

                    name="priority"

                    value={todo.priority}

                    onChange={changeHandler}

                >

                    <option>

                        Low

                    </option>

                    <option>

                        Medium

                    </option>

                    <option>

                        High

                    </option>

                </select>

                <button>

                    {

                        editingTodo ?

                            "Update Todo"

                            :

                            "Add Todo"

                    }

                </button>

            </form>

        </>

    );

}

export default TodoForm;