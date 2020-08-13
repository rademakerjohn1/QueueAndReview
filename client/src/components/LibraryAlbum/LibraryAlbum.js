import React from 'react';
import API from '../../utils/API';
import Album from '../Album/Album';
import AlbumHeader from '../AlbumHeader/AlbumHeader'
import UserFeedBack from '../UserFeedBack/UserFeedBack'
import EditForm from '../EditForm/EditForm'


class LibraryAlbum extends React.Component {

    state = {
        album: [],
        edit: false,
        dateListened: new Date(),
        review: '',
        selectedTracks: [],
        rating: 0
    }

    componentDidMount() {
        if (!this.props.location.state) {
            return
        } else {
            this.setState({rating: this.props.location.state.album.rating})
            let formatted = new Date(this.props.location.state.album.dateListened)
            let string = formatted.toLocaleDateString()
            this.props.location.state.album.dateListened = string;
            this.setState({ album: this.props.location.state.album })
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleEdit() {
        this.setState({edit: !this.state.edit})
    }

    handleDate = date => {
        this.setState({
          dateListened: date
        });
      };
    
    async handleDelete(album) {
        await API.removeAlbum(album);
        window.location = "/library"
    }

    handleTrackSave(event) {
        if (this.state.selectedTracks.length >= 3) return;
        const song = this.state.album.tracks.find(track => track === event.target.getAttribute("data"))
        let joined = this.state.selectedTracks.concat(song);
        this.setState({selectedTracks: joined})
    }

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

    render() {
        return (
            !this.state.edit ?
                <Album
                    albumId={this.state.album.albumId}
                    thumbnail={this.state.album.thumbnail}>
                    <UserFeedBack
                        title={this.state.album.title}
                        edit={() => this.handleEdit()} 
                        artist={this.state.album.artist}
                        year={this.state.album.year}
                        review={this.state.album.review}
                        rating={this.state.album.rating}
                        tracks={this.state.album.selectedTracks}
                        dateListened={this.state.album.dateListened}
                        delete={() => this.handleDelete(this.state.album)}
                    />
                </Album>
                : 
                <Album
                    albumId={this.state.album.albumId}
                    thumbnail={this.state.album.thumbnail}>
                <AlbumHeader 
                        title={this.state.album.title} 
                        artist={this.state.album.artist} 
                        year={this.state.album.year} />
                <EditForm
                    dateListened={this.state.dateListened}
                    review={this.state.review}
                    rating={this.state.rating}
                    tracks={this.state.album.tracks}
                    onClick={(event) => this.handleTrackSave(event)}
                    originalReview={this.state.album.review}
                    onChange={this.handleChange}
                    handleDate={this.handleDate}
                    changeRating={(event) => this.changeRating(event)} 
                    remove={() => this.handleRemove(this.state.album)}
                    submitForm={(event) => this.submitForm(event)} 
                    handleEdit={() => this.handleEdit()}
                />
            </Album>
        )
}
}

export default LibraryAlbum;