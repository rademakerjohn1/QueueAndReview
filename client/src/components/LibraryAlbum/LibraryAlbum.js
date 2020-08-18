import React from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Album from '../Album/Album';
import UserFeedBack from '../UserFeedBack/UserFeedBack'
import ButtonRow from '../ButtonRow/ButtonRow'
import Button from '../Button/Button'

class LibraryAlbum extends React.Component {

    state = {
        edit: false,
        checked: {},
        album: [],
        dateListened: new Date(),
        review: '',
        selectedTracks: [],
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

    async handleDelete(album) {
        await API.removeAlbum(album);
        window.location = "/library"
    }

    render() {

        const { album } = this.state;

        return (
                <Album
                    albumId={album.albumId}
                    thumbnail={album.thumbnail}
                    className="library-album">
                    <UserFeedBack
                        title={album.title}
                        edit={() => this.handleEdit()}
                        artist={album.artist}
                        year={album.year}
                        review={album.review}
                        rating={album.rating}
                        tracks={album.selectedTracks}
                        dateListened={album.dateListened}
                        delete={() => this.handleDelete(album)}
                    />
                    <ButtonRow>
                    <Link to={{ pathname: "/library/album/edit", state: { album: album }}}>
                        <Button buttonClass={"edit-btn btn-primary"} buttonText={"Edit Album"} />
                    </Link>
                    <Button
                        buttonClass={"delete-btn btn-danger"}
                        buttonText={"Remove Album"}
                        onClick={() => this.handleDelete(album)} />
                </ButtonRow>
                </Album>
        )
    }
}

export default LibraryAlbum;