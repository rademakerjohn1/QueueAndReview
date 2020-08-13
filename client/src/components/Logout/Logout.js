import React from 'react'
import './Logout.css'

function Logout(props) {
    return (
        <a id="logout" href="/user/logout" onClick={props.onClick}>Logout</a>
    )
}

export default Logout;