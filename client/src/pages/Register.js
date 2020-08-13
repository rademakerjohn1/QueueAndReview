import React from 'react'
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
    return (
        <form id="register" action="/user/register" method="POST">
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password1" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <label for="password2">Confirm Password</label>
                <input type="password" className="form-control" id="password2" name="password2" placeholder="Password" />
            </div>
            <Link to="/login">Already registered? Log in.</Link>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Register;