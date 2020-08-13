import React from 'react';
import './EditForm.css'
import AlbumTrackList from '../AlbumTrackList/AlbumTrackList'
import Stars from '../Stars/Stars'
import DateSelector from '../DateSelector/DateSelector'
import AlbumButtonRow from '../AlbumButtonRow/AlbumButtonRow'
import AlbumButton from '../AlbumButton/AlbumButton'


// Render form for user feedback

function EditForm(props) {

    return (
        <form>
            <label>Listened on:
            <DateSelector dateListened={props.dateListened} onChange={props.handleDate} />
            </label>

            <label htmlFor="review">What did you think of the album?</label>
            <textarea name="review" value={props.review} onChange={props.onChange} id="review" placeholder={props.originalReview}></textarea>

            <AlbumTrackList text={"Pick up to three favorite songs"} onClick={props.onClick} tracks={props.tracks} />

            <label>Rating out of 5:
            <Stars rating={props.rating} changeRating={props.changeRating} />
            </label>
            <AlbumButtonRow>
                <AlbumButton
                    buttonClass={"save-btn btn-success"}
                    buttonText={"Submit"}
                    onClick={props.submitForm} />
                <AlbumButton
                    buttonClass={"back-btn btn-danger"}
                    buttonText={"Cancel"}
                    onClick={props.handleEdit} />
            </AlbumButtonRow>

        </form>
    )

}

export default EditForm;