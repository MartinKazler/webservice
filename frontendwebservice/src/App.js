import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Login from "./components/Logregcontroll/Login";
import Register from "./components/Logregcontroll/Register";
import Posttab from "./components/Postcontroll/Posttab";
import PostShow from "./components/Postcontroll/PostShow";
import UserService from "./components/Logregcontroll/UserService";

function App() {
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
    const [login, setLogin] = useState(false);

    const logout = (props) => {
        console.log("Logged out")
        const data = UserService.logout(props.username, props.token);
        setLogin(false);
        setToken('');
        setUsername('')
        alert("Logged out");
    };

    if (login === false) {return ( < div className = "App" >
                <BrowserRouter >
                <header className = "App-header" style = {{ display: "flex", justifyContent: "space-between" }} >
                <NavLink exact activeClassName = "active" to = "/Register" >
                <h1 className = "h1" > Register < /h1></NavLink >
                <NavLink activeClassName = "active" to = "/Login" > < h1 className = "h1" > Login < /h1> </NavLink >
                <NavLink activeClassName = "active" to = "/PostShow" > < h1 className = "h1" > Posts < /h1> </NavLink > < /header >
                    <div className = "content" style = {{ marginTop: "250px" }} >
                <Switch >
                <Route exact path = "/Register" component = {() => < Register / >} />
                    <Route exact path = "/Login" component = {() => < Login setToken = { setToken } token = { token } username = { username } setUsername = { setUsername } login = { login } setLogin = { setLogin }/>}/ >
                    <Route exact path = "/PostShow" component = {() => < PostShow username = { username } setUsername = { setUsername } login = { login } setToken = { setToken } token = { token }/>}/ >
                        </Switch> < /div > < /BrowserRouter> < /div >);}
                else {return ( < div className = "App" ><BrowserRouter >
                            <header className = "App-header"style = {{ display: "flex", justifyContent: "space-beetween" }} >
                            <NavLink activeClassName = "active"to = "/Login" onClick = { logout }> < h1 className = "h1" > logout < /h1>< /NavLink>
                    <NavLink activeClassName = "active"to = "/PostShow"> < h1 className = "h1" > Showpost < /h1>< /NavLink>
                    <NavLink activeClassName = "active"to = "/Posttab"> < h1 className = "h1" > Posttab < /h1> </NavLink> < /header >
                    <div className = "content"style = {{ marginTop: "250px" }} >
                            <Switch >
                            <Route exact path = "/Register"component = {() => < Register / >}/>
                    <Route exact path = "/Login"component = {() => < Login setToken = { setToken }token = { token }username = { username }setUsername = { setUsername }login = { login }setLogin = { setLogin }/>}/ >
                                <Route exact path = "/Posttab"component = {() => < Posttab setToken = { setToken }token = { token }username = { username }login = { login }/>}/ >
                                    <Route exact path = "/PostShow"component = {() => < PostShow username = { username }setUsername = { setUsername }login = { login }setToken = { setToken }token = { token }/>}/ >
                                        </Switch> < /div > </BrowserRouter> < /div >);
                                }
                            }

                            export default App;