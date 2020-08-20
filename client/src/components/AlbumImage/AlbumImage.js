import React from 'react';

// Renders album art image

function AlbumImage(props) {
    return (
        <div className="col-sm-3 col-xs-12">
            <img 
                className="card-img" 
                alt="album art" 
                src={props.thumbnail === null || props.thumbnail === "" ? process.env.PUBLIC_URL + "/placeholder.png" : props.thumbnail} 
                id={props._id} />
            {props.children}
        </div>
    )
}

export default AlbumImage;