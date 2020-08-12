import React from 'react';
import './UserFeedBack.css'
import Stars from './Stars'
import AlbumButtonRow from './AlbumButtonRow'


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
                <Stars isSelectable="false" rating={props.rating} />

                <h4>Your Selected Tracks:</h4>
                {!props.tracks ? null :
                    <ul>
                        {props.tracks.map(track => <li>{track}</li>)}
                    </ul>
                }
                <AlbumButtonRow buttonClass={"edit-btn btn-primary"} onClick={props.edit} buttonText={"Edit Album"}>
                    <button className={'delete-btn btn-danger'} onClick={props.remove}>Remove Album</button>
                </AlbumButtonRow>
            </div>


        </div>
    )
}

export default UserFeedBack;

