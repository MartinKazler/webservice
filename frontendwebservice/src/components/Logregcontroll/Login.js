import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import UserService from "./UserService";


const Login = (props) => {
    const [user, setUser] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const timerId = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timerId);
    }, [loading]);

    const loginUsers = async(user) => {
        const data = await UserService.loginUser(user.username, user.password);
        if (data !== "error") {
            props.setToken(data);
            props.setLogin(true);
            props.setUsername(user.username)
        } else {
            setLoading(true);
        }
    };



    const handleLogin = async(e) => {
        e.preventDefault()
        if (!user.username || !user.password) return alert("Somethings wrong");
        await loginUsers(user);
        if (props.login === true) {
            alert(" you are logged in ")
            history.push("/Post");
        } else {
            setLoading(true);
        }
    };

    const changeUserData = (e) => {
        setUser({...user, [e.target.name]: e.target.value });
    };

    return ( <
        >
        <div className = "login" >
        <form style = {
            {
                width: "flex",
                backgroundSize: "cover",
                height: "flex",
                margin: "auto"
            }}
        onSubmit = { handleLogin } >
        <h3 > { loading ? "Loading..." : "Login" } < /h3>
            <input type = "text"
        name = "username"
        value = { user.username }
        placeholder = "Username"
        style = {
            { background: "white", width: "flex", borderRadius: "10px", height: "20px" }
        }
        onChange = { changeUserData }
        required / >
        <input type = "password"
        name = "password"
        value = { user.password }
        placeholder = "Password"
        style = {
            { background: "white", width: "flex", borderRadius: "10px", height: "20px" }
        }
        onChange = { changeUserData }
        required autoComplete = "off" / >
        <br / >
        <button type = "submit"
        style = {
            { background: "grey", borderRadius: "10px" }
        } > Login < /button>
            <NavLink to = { "/Register" } > < p style = {
            { color: "black", paddingBottom: "30px", marginTop: "20px" }
        } > Register here! < /p></NavLink >
        </form> < /div > </>
    );
};
export default Login;