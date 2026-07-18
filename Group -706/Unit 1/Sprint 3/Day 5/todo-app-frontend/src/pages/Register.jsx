import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
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

        const data = await api.register(user);

        alert(data.msg);

        if (data.status) {
            navigate("/login");
        }
    };

    return (
        <div className="container">

            <h2>Register</h2>

            <form onSubmit={submitHandler}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={user.name}
                    onChange={changeHandler}
                />

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

                <button>Register</button>

            </form>

            <br />

            <p>
                Already have an account?{" "}
                <Link to="/login">Login</Link>
            </p>

        </div>
    );
}

export default Register;