import React from "react";

// Renders a list item with song title

function AlbumTrack(props) {

    return(
        <li data={props.songTitle} onClick={props.onClick}>
            {props.songTitle}
        </li>

    )
}

export default AlbumTrack;