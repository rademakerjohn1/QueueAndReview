import React from 'react';

function AlbumImage(props) {
    return (
        <div className="col-md-3 col-sm-12">
            <img className="card-img" alt="album art" src={props.img} id={props.idAlbum} />
        </div>
    )
}

export default AlbumImage;