import React, { Component } from "react";
import API from '../utils/API';
import './Queue.css'
import GridSquare from '../components/GridSquare/GridSquare'


class Library extends Component {

    state = {
        albums: [],
    };

    componentDidMount() {
        this.getListenedAlbums();
    }

    // Get albums from database where "listened" is true, set results to this.state.albums
    async getListenedAlbums() {
        const albums = await API.getListenedAlbums();
        this.setState({ albums: albums.data[0].albums })
    };

    // Render "empty library" message if no listened albums
    // Else map AlbumSquares of each listened album that links to "/view"
    render() {

        const { albums } = this.state

        return (
            <div id="queue-wrapper" className="row">
                <h1 className="page-header">Library</h1>
                {albums.length === 0 ?
                    <p>Your library is empty! <br />
                    Check your <a href="/queue">queue</a> or <a href="/search">search</a> to start building your collection!</p>
                    :
                    <div className="queue-row row">
                        {albums.map(album => (
                            <GridSquare
                                key={album._id}
                                rating={album.rating}
                                title={album.title}
                                artist={album.artist}
                                link={"/library/album"}
                                thumbnail={album.thumbnail}
                                album={album}
                                id={album._id} />
                        ))
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Library;