import React from 'react'
import './Error.css'

function Error(props) {
    return (
        <p className="error-message">{props.error}</p>
    )
}

export default Error;