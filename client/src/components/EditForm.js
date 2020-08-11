import React from 'react';
import './EditForm.css'
import List from './List'
import Stars from './Stars'
import DateSelector from './DateSelector'

function EditForm(props) {

    return (
        <form>
            <label>Listened on:
            <DateSelector dateListened={props.dateListened} onChange={props.handleDate} />
            </label>

            <label for="review">What did you think of the album?</label>
            <textarea name="review" value={props.review} onChange={props.onChange} id="review"></textarea>

            <p>Pick up to three favorite songs</p>
            <List onClick={props.onClick} trackList={props.trackList} />

            <label>Rating out of 5:
            <Stars rating={props.rating} changeRating={props.changeRating} />
            </label>

            <button onClick={props.submitForm} className="btn-success">Submit</button>
        </form>
    )

}

export default EditForm;