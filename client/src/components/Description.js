import React from 'react'
import LongDescription from './LongDescription'

function Description(props) {
    return (
        props.description.length > 250 ? 
            <LongDescription description={props.description} /> 
            : <p className="description-text">{props.description}</p>
    )
}

export default Description;