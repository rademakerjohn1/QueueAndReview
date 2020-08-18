import React from "react";
import './Album.css'
import AlbumImage from '../AlbumImage/AlbumImage'

// Renders a row containing album art and heading (title, artist and year).
// Children prop used to represent variable content (album details, edit form or user feedback)

function Album(props) {

        return (
            <div className={`${props.className} album-card`}>
                <div className="row album-row">
                    <AlbumImage thumbnail={props.thumbnail} _id={props._id} />
                    <div className="col-md-8 col-sm-12">
                        {props.children}
                    </div>
                </div>
            </div>
        )
}
export default Album;