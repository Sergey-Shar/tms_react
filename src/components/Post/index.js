import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {

    const [post, setPost] = useState({})

    const getPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        const data = await response.json()
        setPost(data)
    }

    useEffect(() => {
        getPost()
    }, [])

    const params = useParams()

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Post