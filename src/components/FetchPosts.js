import {useEffect, useState} from "react";
import React from 'react';


const FetchPosts = (props) => {
    const {setPosts, BASE_URL, posts} = props;

    const fetchPosts = async () => {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        setPosts(data.data.posts);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return <>
        <h3>Bootleg Craig</h3>
        {
            posts ? posts.map((post, index) => <div key={post._id}>
                     <h2>{post.title}</h2>
                     <div>{post.description}</div>
            </div>) : null
        }
    </>
}


export default FetchPosts;