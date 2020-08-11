import React, { Component } from "react";
import Album from './Album'
import AlbumButtonRow from './AlbumButtonRow'
import AlbumContent from './AlbumContent'

// Renders album view with buttons, description and tracklist for results in Search component and "view" mode in Edit component
// "this.state.open" is changed on click to toggle tracklist visibility

class AlbumView extends Component {

    constructor(props) {
        super(props);
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
            <Album idAlbum={this.props.idAlbum} img={this.props.img} 
            id={this.props.id} title={this.props.title} artist={this.props.artist}
            year={this.props.year}>
                <AlbumButtonRow buttonClass={this.props.buttonClass} children={this.props.children} onClick={this.props.onClick} buttonAction={this.props.buttonAction} allMusicID={this.props.allMusicID} />
                <AlbumContent description={this.props.description} onClick={(e) => this.toggleTrackList(e)} open={this.state.open} trackList={this.props.trackList} />
            </Album>
        )
    }
}

export default AlbumView;