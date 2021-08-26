import React, {useState} from 'react'


const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return <div>
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <div>
                <label>Enter Username:</label>
                <input type='text' name='password' value={username}
                onChange={(event) => setUsername(event.target.value)}></input>
            </div>
            <div>
                <label>Enter Password:</label>
                <input type='password' name='password' value={password}
                onChange={(event) => setPassword(event.target.value) }></input>
            </div>
            <button type='submit'>Login</button>
        </form>


    </div>
}


export default Login;

