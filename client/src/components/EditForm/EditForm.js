import React from 'react';
import './EditForm.css'
import Stars from '../Stars/Stars'
import DateSelector from '../DateSelector/DateSelector'
import ButtonRow from '../ButtonRow/ButtonRow'
import Button from '../Button/Button'


// Render form for user feedback

function EditForm(props) {

    return (
        <form>

            {/* Date-listened selector */}
            <label>Listened on:
            <DateSelector dateListened={props.dateListened} onChange={props.handleDate} />
            </label>

            {/* Album review section */}
            <label htmlFor="review">What did you think of the album?</label>
            <textarea name="review" value={props.review} onChange={props.onChange} id="review" placeholder={props.originalReview}></textarea>

            {/* Track selection section */}
            <label htmlFor="selector">Pick up to three favorite songs</label>
            {props.children}

            {/* Album star rating section */}
            <label>Rating out of 5:
            <Stars rating={props.rating} changeRating={props.changeRating} dimension="25px" />
            </label>

            {/* Submit and cancel buttons */}
            <ButtonRow>
                <Button
                    buttonClass={"edit-btn btn-success"}
                    buttonText={"Submit"}
                    onClick={props.submitForm} />
                <Button
                    buttonClass={"cancel-btn btn-danger"}
                    buttonText={"Cancel"}
                    onClick={props.handleCancel} />
            </ButtonRow>
        </form>
    )

}

export default EditForm;