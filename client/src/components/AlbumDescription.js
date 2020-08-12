import React from 'react'
import AlbumDescriptionLong from './AlbumDescriptionLong'

// If album description is over 250 characters, render DescriptionLong.
// Else render full description

function AlbumDescription(props) {
    return (
        props.description === undefined ? <p>No description available</p> :
            props.description.length > 250 ? 
                <AlbumDescriptionLong description={props.description} /> 
                : <p className="description-text">{props.description}</p>
    )
}

export default AlbumDescription;