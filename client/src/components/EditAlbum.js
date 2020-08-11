import React from 'react';
import API from '../utils/API';
import Album from './Album';
import AlbumView from './AlbumView'
import EditForm from './EditForm'

class Edit extends React.Component {
    state = {
        album: [],
        edit: false,
        dateListened: new Date(),
        selectedTracks: [],
        review: '',
        rating: 0
    }


    componentDidMount() {
        if (!this.props.location.state) {
            return 
        } else { 
            this.setState({album: this.props.location.state.album})
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

    async handleRemove(album) {
        await API.removeAlbum(album);
        window.location = "/queue"
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
        window.location = "/queue"
    }


    render() {
        return (
            !this.state.edit ? 
                <AlbumView  
                    idAlbum={this.state.album.albumId} 
                    img={this.state.album.thumbnail === null ? "placeholder.png" : this.state.album.thumbnail}
                    title={this.state.album.title} 
                    artist={this.state.album.artist} 
                    year={this.state.album.year} 
                    buttonClass={"edit-btn"} 
                    buttonAction={"Add To Library"} 
                    onClick={() => this.handleEdit()} 
                    allMusicID={this.state.album.allMusicID}
                    description={this.state.album.description} trackList={this.state.album.tracks}
                >
                    <button className={'delete-btn btn-danger'} onClick={() => this.handleRemove(this.state.album)}>Remove Album</button>
                </AlbumView>
            :
                <Album 
                idAlbum={this.state.album.albumId} 
                img={this.state.album.thumbnail === null ? "placeholder.png" : this.state.album.thumbnail}
                title={this.state.album.title}
                id={this.state.album.id} 
                artist={this.state.album.artist} 
                year={this.state.album.year}
                >
                    <EditForm 
                        title={this.state.album.title} 
                        review={this.state.review}
                        onChange={this.handleChange}
                        dateListened={this.state.dateListened}
                        handleDate={this.handleDate}
                        trackList={this.state.album.tracks} 
                        onClick={(event) => this.handleTrackSave(event)}
                        rating={this.state.rating}
                        changeRating={(event) => this.changeRating(event)} 
                        submitForm={(event) => this.submitForm(event)} 
                    />
                </Album>
            )       
    }
}

export default Edit;