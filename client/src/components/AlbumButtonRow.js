import React from 'react'

function AlbumButtonRow(props) {

    return (
        <div className="sub-row row">
            <button className={`${props.buttonClass} btn-primary`} onClick={props.onClick}>{`${props.buttonAction}`}</button>
            {props.children}
            {!props.allMusicID ? null :
                <a href={`https://www.allmusic.com/album/${props.allMusicID}`} target="blank">
                    <img src="https://logo.clearbit.com/allmusic.com" className="allmusic-logo" alt="allmusic-logo" />
                </a>
            }
        </div>
    )
}

export default AlbumButtonRow;
