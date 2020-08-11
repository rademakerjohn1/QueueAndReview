import React from 'react';
import { Link } from 'react-router-dom';
import './AlbumSquare.css'

function AlbumSquare(props) {
    return (
        
        <div className="queue-card card" alt="" key={props.albumId} id={props.albumId}>
        <Link to={{pathname: `${props.link}`, state: {album: props.album}} }>
         <img className="card-img" alt="album-art" src={props.thumbnail}   />
         </Link>
        </div>

    )
}

export default AlbumSquare;