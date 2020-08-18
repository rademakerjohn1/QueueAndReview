import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'
import API from '../utils/API'
import Error from '../components/Error/Error'

class Register extends Component {
    constructor(props) {

        super(props)

        this.state = {
            errors: [],
            name: '',
            email: '',
            password: '',
            password2: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({errors: []})

        if (this.state.password !== this.state.password2) {
            let joined = this.state.errors.concat("Passwords do not match")
            this.setState({errors: joined})
            return;
        }
        const userInput = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.handleRegister(userInput)
    }

    handleRegister(registration) {
        API.registerUser(registration)
            .then(res => {
                if (!('errors' in res.data)) {
                    window.location = "/login"
                } else {
                    this.setState({errors: res.data.errors})
                }
            })
    }

    render() {

        const { errors } = this.state;

        return (
            <form id="register">
                <h3>Register</h3>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input onChange={this.handleChange} type="text" className="form-control" id="name" name="name" placeholder="Enter name" />
                    {errors.includes("Name required") && <Error error="Name required" />}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input onChange={this.handleChange} type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
                    {errors.includes("Email required") && <Error error="Email required" />}
                    {errors.includes("An account with this email exists") && <Error error="An account with this email exists" />}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input onChange={this.handleChange} type="password" className="form-control" id="password1" name="password" placeholder="Password" />
                    {errors.includes("Password must be at least six characters") && <Error error="Password must be at least six characters" />}
                    {errors.includes("Password required") && <Error error="Password required" />}

                </div>
                <div className="form-group">
                    <label htmlFor="password2">Retype Password:</label>
                    <input onChange={this.handleChange} type="password" className="form-control" id="password2" name="password2" placeholder="Password" />
                    {errors.includes("Passwords do not match") && <Error error="Passwords do not match" />}
                </div>
                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button><br />
                <Link to="/login">Already registered? Log in.</Link>
            </form>
        )

    }

}

export default Register;