import React, { Component } from "react";
import API from '../utils/API';
import './Queue.css'
import GridSquare from '../components/GridSquare/GridSquare'


class Library extends Component {

    state = {
      albums: [],
      album: []
    };

    componentDidMount() {
        this.getListenedAlbums();
    }

    // Get albums from database where "listened" is true, set results to this.state.albums
    async getListenedAlbums() {
        const albums = await API.getListenedAlbums();
        this.setState({albums: albums.data[0].albums})
    };

    // Render "empty library" message if no listened albums
    // Else map AlbumSquares of each listened album that links to "/view"
    render() {
        return (
            <div id="queue-wrapper">
                <h1 className="page-header">Your Library</h1>
                {this.state.albums.length === 0  ? <p>...is empty. <br /> Check your <a href="/queue">queue</a> or <a href="/search">search</a> for albums!</p> : 
                <div className="queue-row row">
                    {this.state.albums.map(album => (
                        <GridSquare key={album.albumId} rating={album.rating} title={album.title} artist={album.artist} link={"/library/view"} thumbnail={album.thumbnail} album={album} id={album.albumId} />
                    ))}
                </div>
                }
            </div>
        )
    }
}

export default Library;