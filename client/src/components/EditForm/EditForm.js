import React from 'react';
import './EditForm.css'
import AlbumTrackList from '../AlbumTrackList/AlbumTrackList'
import Stars from '../Stars/Stars'
import DateSelector from '../DateSelector/DateSelector'


// Render form for user feedback

function EditForm(props) {

    return (
        <form>
            <label>Listened on:
            <DateSelector dateListened={props.dateListened} onChange={props.handleDate} />
            </label>

            <label for="review">What did you think of the album?</label>
            <textarea name="review" value={props.review} onChange={props.onChange} id="review" placeholder={props.originalReview}></textarea>

            <AlbumTrackList text={"Pick up to three favorite songs"} onClick={props.onClick} tracks={props.tracks} />

            <label>Rating out of 5:
            <Stars rating={props.rating} changeRating={props.changeRating} />
            </label>

            <button onClick={props.submitForm} className="btn-success">Submit</button>
        </form>
    )

}

export default EditForm;