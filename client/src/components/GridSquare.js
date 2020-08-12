import React from 'react';
import { Link } from 'react-router-dom';
import './GridSquare.css'

// Renders a square with album artwork
// Cick will link to "/edit" or "/view" window locations, passing along album info from state

function GridSquare(props) {

    return (
        <div className="queue-card card" alt="" key={props.albumId} id={props.albumId}>
            <Link to={{ pathname: `${props.link}`, state: { album: props.album } }}>
                <img className="card-img" alt="album-art" src={props.thumbnail} />
            </Link>
        </div>
    )
}

export default GridSquare;