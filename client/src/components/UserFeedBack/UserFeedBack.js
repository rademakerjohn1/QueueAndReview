import React from 'react';
import './UserFeedBack.css'
import Stars from '../Stars/Stars'
import SelectedTracks from'../SelectedTracks/SelectedTracks'


function UserFeedBack(props) {
    return (
        <div id="feedback">

            <h2>Here's what you thought about "{props.title}" by {props.artist}:</h2>

            <div id="feedback-content">

                <h4>Date Listened:</h4>
                <p>{props.dateListened}</p>

                
                <h4>Your Review:</h4>
                {!props.review ? <p>No review found.</p> : <p>"{props.review}"</p>}

                <h4>Your Rating:</h4>
                <Stars isSelectable="false" rating={props.rating} dimension="25px" />

                <h4>Your Selected Tracks:</h4>
                {props.tracks && !!props.tracks.length ?
                    <SelectedTracks tracks={props.tracks} /> :
                    <p>No track selections found.</p>
                }
            </div>
        </div>
    )
}

export default UserFeedBack;