import React from "react";
import ListItem from './ListItem';
// import { Collapse } from 'react-collapse';

function List(props) {

    return (
        <div className="tracklist-container">
                <ol>
                    {props.trackList.map(track => 
                        <ListItem onClick={props.onClick} songTitle={track} />
                    )}
                </ol>
        </div>
    )
}

export default List