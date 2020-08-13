import React from 'react'
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
    return (
        <form id="register" action="/user/register" method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password1" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" className="form-control" id="password2" name="password2" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button><br />
            <Link to="/login">Already registered? Log in.</Link>
        </form>
    )
}

export default Register;