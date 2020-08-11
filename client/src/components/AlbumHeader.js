import React from 'react';

function AlbumHeader(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.artist}</h3>
            <h6>{props.year}</h6>
            {props.children}
        </div>
    )
}

export default AlbumHeader;