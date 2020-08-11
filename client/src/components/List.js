import React from "react";
import ListItem from './ListItem';

// Renders ordered list that maps a ListItem of each track in props.TrackList

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