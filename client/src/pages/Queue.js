import React, { Component } from "react";
import API from '../utils/API';
import './Queue.css'
import GridSquare from '../components/GridSquare/GridSquare'

class Queue extends Component {

    state = {
        albums: [],
    };

    componentDidMount() {
        this.getUnlistenedAlbums();
    }

    // Get albums from database where "listened" is false, set results to this.state.albums
    async getUnlistenedAlbums() {
        const albums = await API.getUnlistenedAlbums();
        this.setState({ albums: albums.data[0].albums })
    };

    // Render "empty queue" message if no unlistened albums
    // Else, map AlbumSquares of each listened album that links to "/edit"
    render() {

        const { albums } = this.state;

        return (
            <div id="queue-wrapper" className="row">
                <h1 className="page-header">Queue</h1>
                {albums.length === 0 ? <p>Your queue is empty!<br /><a href="/search">Search</a> for albums to add!</p> :
                    <div className="queue-row row">
                        {albums.map(album => (
                            <GridSquare
                                key={album.albumId}
                                link={"/queue/album"}
                                title={album.title}
                                artist={album.artist}
                                thumbnail={album.thumbnail}
                                album={album}
                                id={album.albumId}
                            />
                        ))}
                    </div>
                }
            </div>
        )
    }
}

export default Queue;