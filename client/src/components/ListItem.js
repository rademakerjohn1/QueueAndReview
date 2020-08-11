import React from "react";

function ListItem(props) {
    

    return(
        <li data={props.songTitle} onClick={props.onClick}>
            {props.songTitle}
        </li>

    )
}

export default ListItem;