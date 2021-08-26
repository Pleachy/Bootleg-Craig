import React, {useState} from 'react'


const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return <div>
        <form>
            <div>
                <label>Enter Username:</label>
                <input type='text' name='password' value={username}></input>
            </div>
            <div>
                <label>Enter Password:</label>
                <input type='password' name='password' value={password}></input>
            </div>
            <button type='submit'>Login</button>
        </form>


    </div>
}


export default Login;

