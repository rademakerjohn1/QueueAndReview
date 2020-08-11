import React from 'react'

// Renders sub-row of buttons for album info in results from Search component  and "view" mode from Queue component

// Button content and action changes depending on view ("add to queue" from Search, "add to library" from Queue)
    // Children prop represents space for "remove from queue" button in Queue

// If allMusicID exists, renders AllMusic logo with link to the album's AllMusic page

function AlbumButtonRow(props) {

    return (
        <div className="sub-row row">
            <button className={`${props.buttonClass} btn-primary`} onClick={props.onClick}>{`${props.buttonAction}`}</button>
            {props.children}
            {props.allMusicID &&
                <a href={`https://www.allmusic.com/album/${props.allMusicID}`} target="blank">
                    <img src="https://logo.clearbit.com/allmusic.com" className="allmusic-logo" alt="allmusic-logo" />
                </a>
            }
        </div>
    )
}

export default AlbumButtonRow;
