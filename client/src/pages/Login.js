import React from 'react'
import './Login.css'

function Login() {
    return (
        <form id="login" action="/user/login" method="POST">
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login;