import React from 'react';
import './UserFeedBack.css'
import Stars from '../Stars/Stars'
import AlbumButtonRow from '../AlbumButtonRow/AlbumButtonRow'
import AlbumButton from '../AlbumButton/AlbumButton'


function UserFeedBack(props) {
    return (
        <div id="feedback">
            <h2>Here's what you thought about "{props.title}" by {props.artist}:</h2>
            <div id="feedback-content">
                <h4>Date Listened:</h4>
                <p>{props.dateListened}</p>

                <h4>Your Review:</h4>
                <p>"{props.review}"</p>

                <h4>Your Rating:</h4>
                <Stars isSelectable="false" rating={props.rating} dimension="25px" />

                <h4>Your Selected Tracks:</h4>
                {!props.tracks ? null :
                    <ul>
                        {props.tracks.map(track => <li key={track}>{track}</li>)}
                    </ul>
                }
                <AlbumButtonRow>
                    <AlbumButton
                        buttonClass={"edit-btn btn-primary"}
                        buttonText={"Edit Album"}
                        onClick={props.edit} />
                    <AlbumButton
                        buttonClass={"delete-btn btn-danger"}
                        buttonText={"Remove Album"}
                        onClick={props.delete} />
                </AlbumButtonRow>
            </div>
        </div>
    )
}

export default UserFeedBack;