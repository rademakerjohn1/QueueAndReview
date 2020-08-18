import React, { Component } from 'react'
import API from '../../utils/API';
import Album from '../Album/Album'
import AlbumHeader from '../AlbumHeader/AlbumHeader'
import EditForm from '../EditForm/EditForm'

class EditAlbum extends Component {

    state = {
        album: [],
        checked: {},
        dateListened: new Date(),
        selectedTracks: [],
        review: '',
        rating: 0
    }

    componentDidMount() {

        if (!this.props.location.state) return

        else {
            const { album } = this.props.location.state
            this.setState({ rating: album.rating })
            let formatted = new Date(album.dateListened)
            let string = formatted.toLocaleDateString()
            album.dateListened = string;
            this.setState({ album: album })
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleDate = date => {
        this.setState({
            dateListened: date
        });
    };

    onSelectedChange = (index, event) => {
        this.handleTrackSave(event)
        this.setState(previousState => ({
            checked: {
                ...previousState.checked,
                [index]: !previousState.checked[index]
            }
        }));
    };

    handleTrackSave = (event) => {
        if (event.target.checked) {
            const song = this.state.album.tracks.find(track => track === event.target.getAttribute("data"))
            this.setState(previousState => ({
                selectedTracks: [...previousState.selectedTracks, song]
            }))
        }
        else {
            let array = [...this.state.selectedTracks]
            let index = array.indexOf(event.target.value)
            array.splice(index, 1)
            this.setState({ selectedTracks: array })
        }
    }

    changeRating = (number) => {
        this.setState({
            rating: number
        })
    }

    handleCancel = (event) => {
        event.preventDefault()
        if (this.props.location.pathname === "/queue/album/edit") {
            window.location = "/queue"
        } else {
            window.location = "/library"
        }
    }

    async handleDelete(album) {
        await API.removeAlbum(album);
        if (this.props.location.pathname === "/queue/album/edit") {
            window.location = "/queue"
        } else {
            window.location = "/library"
        }
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
            return { album };
        })
        await API.updateAlbum(this.state.album)
        window.location = "/library"
    }

    render() {

        const { album, checked, dateListened, review, rating } = this.state 
        const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
        const disabled = checkedCount > 2;

        return (
            <Album
                className="queue-album"
                _id={album._id}
                thumbnail={album.thumbnail}
            >
                <AlbumHeader
                    title={album.title}
                    artist={album.artist}
                    year={album.year} />
                <EditForm
                    review={review}
                    onChange={this.handleChange}
                    dateListened={dateListened}
                    handleDate={this.handleDate}
                    handleCheck={(event) => this.handleTrackSave(event)}
                    rating={rating}
                    changeRating={(event) => this.changeRating(event)}
                    submitForm={(event) => this.submitForm(event)}
                    handleCancel={(event) => this.handleCancel(event)}>
                    <ol>
                        {album.tracks && album.tracks.map(track => (
                            <li key={track}>
                                <input
                                    data={track}
                                    key={track}
                                    onChange={(event) => this.onSelectedChange(track, event)}
                                    type="checkbox"
                                    checked={checked[track] || false}
                                    disabled={!checked[track] && disabled}
                                />
                                <label className="track-input">{track}</label>
                            </li>
                        ))}
                    </ol>
                </EditForm>
            </Album>
        )
    }
}

export default EditAlbum;
