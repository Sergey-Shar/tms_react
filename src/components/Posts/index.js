import React, { useEffect, useState } from "react";
import './index.css';
import {Link} from "react-router-dom";

const Requests = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPost()
    }, [])

    const postObj = {
        userId: 1,
        title: "text title",
        body: "body text",
    }

    const getPost = async () => {
        try {
            const respons = await fetch('https://jsonplaceholder.typicode.com/posts/')
            const data = await respons.json()
            setPosts(data)
        } catch (err) {
            console.error(err)
        }
    }

    const createPost = async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(postObj),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        getPost()
    }
    return (
        <div>
            {(posts.length) ? posts.map(item => {
                return (
                    <Link key={item.id} to={`/posts/${item.id}`}>
                        <div>
                            <h2>{item.title}</h2>
                            <span>{item.body}</span>
                        </div></Link>
                )
            }) : <div className='loader'></div>}
            <button onClick={createPost}>Click me HARD!!!!</button>
        </div>
    )
}

export default Requests