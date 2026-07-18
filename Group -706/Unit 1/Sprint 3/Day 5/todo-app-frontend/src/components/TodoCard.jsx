import api from "../services/api";

function TodoCard({

    todo,

    fetchTodos,

    setEditingTodo

}) {

    const deleteTodo = async () => {

        const confirmDelete = window.confirm(

            "Delete this Todo?"

        );

        if (!confirmDelete)

            return;

        const data = await api.deleteTodo(todo._id);

        alert(data.msg);

        fetchTodos();

    };

    return (

        <div className="todo">

            <h3>

                {todo.title}

            </h3>

            <p>

                Priority :

                <b>

                    {todo.priority}

                </b>

            </p>

            <button

                onClick={() =>

                    setEditingTodo(todo)

                }

            >

                Update

            </button>

            <button

                onClick={deleteTodo}

            >

                Delete

            </button>

        </div>

    );

}

export default TodoCard;