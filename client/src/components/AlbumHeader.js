import React from 'react';

// Renders title, artist and year for album header

function AlbumHeader(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.artist}</h2>
            <h3>{props.year}</h3>
        </div>
    )
}

export default AlbumHeader;