import React from 'react';
import {useHistory} from 'react-router-dom';

const FetchSinglePost = (props) => {
    const {post, children} = props;
    const history = useHistory();

    //try catch statement is here to prevent user from seeing an error screen if they
    //refresh their browser while looking at post details.
    try {
        return <div key={post._id} className='post-body'>
            <h3>{post.title}</h3>
            <div>{post.description}</div>
            <div>{post.price}</div>
            <div>{post.location}</div>
            <div>Posted On: {post.createdAt}</div>
            {post.author.username ? <div>Posted By: {post.author.username}</div> : null}
            {
                children
            }
        </div>
    }
    catch {
        alert ("An Authentication error occurred, please log in again")
        history.push('/login');
        return null;
    }
}

//used by FetchPosts.js and ViewPostDetails.js
export default FetchSinglePost;