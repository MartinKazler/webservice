import React, { useState, useEffect } from "react";
import "./../../App.css";
import { useHistory } from "react-router-dom";
import PostService from "./PostService";

const PostShow = (props) => {
    const like = 0;
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [likes, setLikes] = useState(0);
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = React.useState();

    useEffect(() => {
        const timerId = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timerId);
    }, [loading]);


    async function getAllPost() {
        console.log("GETALL")
        await fetch('http://localhost:8080/post/all', {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            });
    }

    useEffect(() => {
        getAllPost();
        getUsers();
        getFavorites();
    }, [])

    async function getUsers() {
        console.log("GET USER")
        await fetch('http://localhost:8080/user/all', {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            });
    }

    const handleNewPost = async(e) => {
        e.preventDefault();
        history.push("/Post")
    }
    const searchPost = async() => {
        const data = await PostService.getPost(props);
        if (data !== "error") {
            await getAllPost(props.info)
        }
    }
    const changeData = (e, post) => {
        setSearch({...post, [e.target.name]: e.target.value });
    };

    const createFavorites = async(post) => {
        const data = await PostService.addFavorites(post.title);
        setFavorites(data);
        await getFavorites();
        alert("Favorite Title:" + post.title + " Content: " + post.content + " Made by: " + props.username);
        alert("No post ");
        setLoading(true);
    }

    const getFavorites = async(props) => {
        const data = await PostService.getFavorites(props);
        setFavorites(data);
        alert("Your favorites: " + posts.title);
        setLoading(true);
    }

    const getLikes = () => {
        console.log('Likes ')
        posts.likes++;
    }

    return ( <
        >
        <div className = "searchPost" >
        <form onSubmit = { searchPost } > < input type = "text"
        onChange = { changeData } style = {{ width: "flex", borderRadius: "20px", height: "flex"  }
        }
        /> <input type = "button" value = "Search" style = {{ background: "grey", width: "flex", borderRadius: "30px", height: "flex" }}
        /></form >
        </div>
            <div className = "getAllPost" style = {
            { padding: '80px' }} >
        <form className = "formShow"
        style = {
            {size: '100%' }} >
        <ul > {posts.map((post, index) => ( < li key = { index } >
                    <div > Made by: { post.username } < /div>
                    Title: { post.title } | Content: { post.content } | Category: { post.category } </li>
                ))} </ul> < /form > </div>
            <form className = "handle"
        style = {
            { height: '100%', background: 'grey' }
        } >
        <h4 > Users post < /h4> <div >
        <ul > {users.map((user, index) => ( < li key = { index } getUsers = { getUsers } >
                    <div > Username: { user.username } < /div> < /li >
                ))} </ul> < /div >
                <h4 > Favorite marked posts < /h4> <div >
        <ul > {favorites.map((favorite, i) => ( < li key = { i } getFavorites = { getFavorites } >
                    <div > Favorites: { favorites } < /div> < /li >
                ))} </ul> < /div >
                <div > Likes: { likes } <
        button style = {
            {size: "flex",background: "grey",borderRadius: "20px"}
        }
        onClick = { getLikes } > Likes </button> <
        button style = {{ background: "grey", borderRadius: "10px" }}
        onClick = { handleNewPost } > Create a posts
        </button> < /div > </form> < / >
    );
};

export default PostShow;