import React from 'react';

// Renders title, artist and year for album header

function AlbumHeader(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.artist} </h2>
            <p>({props.year})</p>

        </div>
    )
}

export default AlbumHeader;