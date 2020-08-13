import React from 'react';

// Renders album art image

function AlbumImage(props) {
    return (
        <div className="col-md-3 col-sm-12">
            <img className="card-img" alt="album art" src={props.thumbnail ===  null ? process.env.PUBLIC_URL + "/placeholder.png" : props.thumbnail} id={props.albumId} />
        </div>
    )
}

export default AlbumImage;