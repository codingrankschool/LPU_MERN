import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const submitHandler = async (e) => {

        e.preventDefault();

        const data = await api.login(user);

        if (!data.status) {
            alert(data.msg);
            return;
        }

        localStorage.setItem("token", data.token);

        alert(data.msg);

        navigate("/");

    };

    return (

        <div className="container">

            <h2>Login</h2>

            <form onSubmit={submitHandler}>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={changeHandler}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={user.password}
                    onChange={changeHandler}
                />

                <button>Login</button>

            </form>

            <br />

            <p>

                Don't have an account?

                <Link to="/register">

                    Register

                </Link>

            </p>

        </div>

    );

}

export default Login;