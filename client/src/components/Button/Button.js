import React from 'react'

function Button(props) {

    return (
        <button className={`${props.buttonClass}`} onClick={props.onClick}>{`${props.buttonText}`}
            {props.children}
        </button>
    )
}

export default Button;
