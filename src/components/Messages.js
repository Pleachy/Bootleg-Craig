import React, {useState} from 'react';

const Messages = (props) => {
    const [message, setMessage] = useState('');
    const {token, BASE_URL, post} = props;

    return <div className="message-form">
        <form>
            <label>Send a message: </label>
            <input type='text' value={message} name='message' 
            onChange={(event) => setMessage(event.target.value)}></input>
            <button type='submit'>Post Message</button>
        </form>
    </div>
}

//used by FetchPosts.js and ViewPostDetails.js
export default Messages;