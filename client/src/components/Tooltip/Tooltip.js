import React from 'react'
import './Tooltip.css'
import Stars from '../Stars/Stars'

function Tooltip(props) {
    return (
        <div className="tooltip-text">
            <p>{props.title}</p>
            <p>{props.artist}</p>
            {props.rating !== undefined && <Stars rating={props.rating} dimension="12px" />}
        </div>
    )
}

export default Tooltip;
