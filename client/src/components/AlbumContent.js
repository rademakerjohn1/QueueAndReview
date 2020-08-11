import React from 'react';
import Description from './Description';
import List from './List'

function AlbumContent(props) {
    return (
        <div>
            {props.description === undefined ?
                <p className="description-text">No description available.</p> : <Description description={props.description} />
            }
            <p onClick={props.onClick}>View Tracklist <i className={`arrow ${!props.open ? "down" : "up"}`}></i></p>
            {!props.open ? null : <List trackList={props.trackList} />}
        </div>
    )
}

export default AlbumContent;

