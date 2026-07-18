const BASE_URL = process.env.REACT_APP_BASE_URL;

const getToken = () => {
  return localStorage.getItem("token");
};

const api = {
  register: async (user) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response.json();
  },

  login: async (user) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response.json();
  },

  getTodos: async () => {
    const response = await fetch(`${BASE_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.json();
  },

  addTodo: async (todo) => {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },

      body: JSON.stringify(todo),
    });

    return response.json();
  },

  updateTodo: async (id, todo) => {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },

      body: JSON.stringify(todo),
    });

    return response.json();
  },

  deleteTodo: async (id) => {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.json();
  },
};

export default api;
