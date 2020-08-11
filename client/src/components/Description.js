import React from 'react'
import DescriptionLong from './DescriptionLong'

// If album description is over 250 characters, render DescriptionLong.
// Else render full description

function Description(props) {
    return (
        props.description.length > 250 ? 
            <DescriptionLong description={props.description} /> 
            : <p className="description-text">{props.description}</p>
    )
}

export default Description;