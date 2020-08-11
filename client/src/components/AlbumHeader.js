import React from 'react';

// Renders title, artist and year for album header

function AlbumHeader(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.artist}</h3>
            <h6>{props.year}</h6>
        </div>
    )
}

export default AlbumHeader;