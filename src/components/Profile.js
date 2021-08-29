import React from 'react';
import {useHistory} from 'react-router-dom';


const Profile = (props) => {
    const history = useHistory();
    const {user} = props;
    let sentMessages = [];
    let receivedMessages = [];
    try {
        sentMessages = user.messages.filter(message => message.fromUser.username === user.username)
        receivedMessages = user.messages.filter(message => message.fromUser.username != user.username)
    } catch (error) {
        alert("There was an authentication error, please log in again.");
        history.push("/login");
    }
    console.log("sent messages: ", sentMessages);
    console.log("received messages: ", receivedMessages);
    console.log(user);
    return <>
             <div className="sent-messages">
                {sentMessages.map(message => {
                    return <div>{message.content}</div>
                })}
            </div>
            <div className="received-messages">
                {receivedMessages.map(message => {
                    return <div>{message.content}</div>
                })}
            </div>
        </>
}

export default Profile