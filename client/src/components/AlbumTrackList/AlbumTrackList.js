import React, { Component } from 'react'
import AlbumTrack from '../AlbumTrack/AlbumTrack'

class AlbumTrackList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.toggleTrackList = this.toggleTrackList.bind(this);
    }
    
    toggleTrackList(e) {
        this.setState({ open: !this.state.open })
    }
    render() {
        return (
            <div className="tracklist-container">
                <p onClick={(e) => this.toggleTrackList(e)}>{this.props.text}<i className={`arrow ${!this.state.open ? "down" : "up"}`}></i></p>
                {this.state.open && 
                    <ol>
                        {this.props.tracks.map(track => 
                            <AlbumTrack onClick={this.props.onClick} songTitle={track} /> )}
                    </ol>
                }
            </div>
        )
    }
}

export default AlbumTrackList;

