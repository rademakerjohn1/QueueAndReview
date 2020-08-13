import React, { Component } from "react";
import API from '../utils/API';
import './Queue.css'
import GridSquare from '../components/GridSquare/GridSquare'

class Queue extends Component {

    state = {
      albums: [],
      album: []
    };

    componentDidMount() {
        this.getUnlistenedAlbums();
    }
    
    // Get albums from database where "listened" is false, set results to this.state.albums
    async getUnlistenedAlbums() {
        const albums = await API.getUnlistenedAlbums();
        this.setState({albums: albums.data[0].albums})
    };

    // Render "empty queue" message if no unlistened albums
    // Else, map AlbumSquares of each listened album that links to "/edit"
    render() {
        console.log('state ', this.state)
        return (
            <div id="queue-wrapper">
                <h1 className="page-header">Your Queue</h1>
                {this.state.albums.length === 0  ? <p>...is empty. <br /><a href="/search">Search</a> for albums to add!</p> : 
                <div className="queue-row row">
                    {this.state.albums.map(album => (
                        <GridSquare key={album.albumId}  link={"/queue/edit"} thumbnail={album.thumbnail} album={album} id={album.albumId} />
                    ))}
                </div>
                }
            </div>
        )
    }
}

export default Queue;