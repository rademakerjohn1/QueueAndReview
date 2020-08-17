import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Error from '../components/Error/Error'
import './Login.css'
import API from '../utils/API'

class Login extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            error: '',
            email: '',
            password: ''
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
        const userInput = {
            email: this.state.email,
            password: this.state.password
        }
        this.handleLogin(userInput)
    }

    handleLogin = (login) => {
        API.loginUser(login)
            .then(res => {
                if (!res.data.success) {
                    this.setState({error: "Invalid email address or password"})
                } else {
                    window.location = "/"
                }
            })

    }

    render() {
        return (
            <form id="login">
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={this.handleChange} type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" className="form-control" id="password" name="password" placeholder="Password" />
                </div>
                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button><br />
                <Link to="/register">Don't have an account? Register.</Link>
                {!this.state.error !== '' && <Error error={this.state.error}/>}
            </form>
        )
    }
}

export default Login;