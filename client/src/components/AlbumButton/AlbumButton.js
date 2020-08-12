import React from 'react'

function AlbumButton(props) {

    return (
        <button className={`${props.buttonClass}`} onClick={props.onClick}>{`${props.buttonText}`}</button>
    )
}

export default AlbumButton;
