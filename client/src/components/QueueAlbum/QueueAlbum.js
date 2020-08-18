import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Album from '../Album/Album';
import AlbumHeader from '../AlbumHeader/AlbumHeader'
import ButtonRow from '../ButtonRow/ButtonRow'
import Button from '../Button/Button'
import AlbumDescription from '../AlbumDescription/AlbumDescription'
import AlbumTrackList from '../AlbumTrackList/AlbumTrackList'
import AllMusicLogo from '../AllMusicLogo/AllMusicLogo'

class QueueAlbum extends React.Component {

    state = {
        album: [],
    }

    // Set this.state.album as props received from Queue component
    componentDidMount() {
        if (!this.props.location.state) {
            return
        } else {
            this.setState({ album: this.props.location.state.album })
        };
    }

    // Remove album from database on button click
    async handleDelete(album) {
        await API.removeAlbum(album);
        window.location = "/queue"
    }

    // If !this.state.edit, render AlbumView with "remove album" button as child
    // Else, render Album with EditForm as child

    render() {

        const { album } = this.state

        return (
            <Album
                className="queue-album"
                albumId={album.albumId}
                thumbnail={album.thumbnail}
            >
                <AlbumHeader
                    title={album.title}
                    artist={album.artist}
                    year={album.year} />
                <AlbumDescription description={album.description} />
                <AlbumTrackList text={"View Tracklist"} tracks={album.tracks} />
                <ButtonRow>
                    <Link to={{ pathname: "/queue/album/edit", state: { album: album }}}>
                        <Button buttonClass={"edit-btn btn-primary"} buttonText={"Add To Library"} />
                    </Link>
                    <Button
                        buttonClass={"delete-btn btn-danger"}
                        buttonText={"Remove Album"}
                        onClick={() => this.handleDelete(album)} />
                    <AllMusicLogo allMusicID={album.allMusicID} />
                </ButtonRow>
            </Album>

        )
    }
}

export default QueueAlbum;