import React from 'react';

function SelectedTracks(props) {
    return(
        !props.tracks ? null :
            <ul>
                {props.tracks.map(track => <li key={track}>{track}</li>)}
            </ul>
    )
}

export default SelectedTracks;