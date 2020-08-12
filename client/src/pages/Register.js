import React from 'react'
import './Register.css'

function Register() {
    return (
        <form id="register">
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="password1">Password</label>
                <input type="password" className="form-control" id="password1" placeholder="Password" />
            </div>
            <div className="form-group">
                <label for="password2">Confirm Password</label>
                <input type="password" className="form-control" id="password2" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Register;