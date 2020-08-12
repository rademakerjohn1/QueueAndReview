import React from 'react';
import API from '../../utils/API';
import Album from '../Album/Album';
import AlbumHeader from '../AlbumHeader/AlbumHeader'
import AlbumButtonRow from '../AlbumButtonRow/AlbumButtonRow'
import AlbumButton from '../AlbumButton/AlbumButton'
import AlbumDescription from '../AlbumDescription/AlbumDescription'
import AlbumTrackList from '../AlbumTrackList/AlbumTrackList'
import AllMusicLogo from '../AllMusicLogo/AllMusicLogo'
import EditForm from '../EditForm/EditForm'

class QueueView extends React.Component {
    state = {
        album: [],
        edit: false,
        dateListened: new Date(),
        selectedTracks: [],
        review: '',
        rating: 0
    }

    // Set this.state.album as props received from Queue component
    componentDidMount() {
        if (!this.props.location.state) {
            return
        } else {
            this.setState({ album: this.props.location.state.album })
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    // Toggle this.state.edit to render form for editing
    handleEdit() {
        this.setState({ edit: !this.state.edit })
    }

    // Set date to this.state.dateListened on DatePicker change
    handleDate = date => {
        this.setState({
            dateListened: date
        });
    };

    // Remove album from database on button click
    async handleDelete(album) {
        await API.removeAlbum(album);
        window.location = "/queue"
    }

    // On click, add up to 3 tracks from album to this.state.selectedTracks
    handleTrackSave(event) {
        if (this.state.selectedTracks.length >= 3) return;
        const song = this.state.album.tracks.find(track => track === event.target.getAttribute("data"))
        let joined = this.state.selectedTracks.concat(song);
        this.setState({ selectedTracks: joined })
    }

    // Set this.state.rating as current rating from Star component 
    changeRating(number) {
        this.setState({
            rating: number
        })
    }

    // Add user feedback to this.state.album, make API call to update album, return to queue
    async submitForm(event) {

        event.preventDefault();
        await this.setState(prevState => {
            let album = Object.assign({}, prevState.album);
            album.listened = true;
            album.dateListened = this.state.dateListened;
            album.selectedTracks = this.state.selectedTracks;
            album.review = this.state.review;
            album.rating = this.state.rating
            console.log(album)
            return { album };
        })
        await API.updateAlbum(this.state.album)
        window.location = "/library"
    }

    // If !this.state.edit, render AlbumView with "remove album" button as child
    // Else, render Album with EditForm as child

    render() {
        return (
            !this.state.edit ?
                <Album
                    albumId={this.state.album.albumId}
                    thumbnail={this.state.album.thumbnail === null ? "placeholder.png" : this.state.album.thumbnail}
                >
                    <AlbumHeader
                        title={this.state.album.title}
                        artist={this.state.album.artist}
                        year={this.state.album.year} />
                    <AlbumDescription description={this.state.album.description} />
                    <AlbumTrackList text={"View Tracklist"} tracks={this.state.album.tracks} />
                    <AlbumButtonRow>
                        <AlbumButton 
                            buttonClass={"edit-btn btn-primary"} 
                            buttonText={"Add To Library"}
                            onClick={() => this.handleEdit()} />
                        <AlbumButton
                            buttonClass={"delete-btn btn-danger"}
                            buttonText={"Remove Album"}
                            onClick={() => this.handleDelete(this.state.album)} />
                        <AllMusicLogo allMusicId={this.state.album.allMusicId} />
                    </AlbumButtonRow>
                </Album>
                :
                <Album
                    albumId={this.state.album.albumId}
                    thumbnail={this.state.album.thumbnail === null ? "placeholder.png" : this.state.album.thumbnail}>
                    <AlbumHeader
                        title={this.state.album.title}
                        artist={this.state.album.artist}
                        year={this.state.album.year} />
                    <EditForm
                        review={this.state.review}
                        onChange={this.handleChange}
                        dateListened={this.state.dateListened}
                        handleDate={this.handleDate}
                        tracks={this.state.album.tracks}
                        onClick={(event) => this.handleTrackSave(event)}
                        rating={this.state.rating}
                        changeRating={(event) => this.changeRating(event)}
                        submitForm={(event) => this.submitForm(event)}
                        handleEdit={() => this.handleEdit()}
                    />
                </Album>
        )
    }
}

export default QueueView;