import React from 'react'

function AllMusicLogo(props) {
    return (
        props.allMusicID ? 
        <a className="allmusic-link" href={`https://www.allmusic.com/album/${props.allMusicID}`} target="blank">
            <img src="https://logo.clearbit.com/allmusic.com" className="allmusic-logo" alt="allmusic-logo" />
        </a>
        : null
    )
}

export default AllMusicLogo;
