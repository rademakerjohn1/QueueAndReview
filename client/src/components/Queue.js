import React, { Component } from "react";
import API from '../utils/API';
import './Queue.css'
import AlbumSquare from './AlbumSquare'

class Queue extends Component {

    state = {
      albums: [],
      album: []
    };

    componentDidMount() {
        this.getUnlistenedAlbums();
    }
    
    async getUnlistenedAlbums() {
        const albums = await API.getUnlistenedAlbums();
        this.setState({albums: albums.data})
    };

  

    render() {
        console.log('state ', this.state)
        return (
            <div id="queue-wrapper">
                <h1 className="page-header">Your Queue</h1>
                {this.state.albums.length === 0  ? <p>...is empty.</p> : 
                <div className="queue-row row">
                    {this.state.albums.map(album => (
                        <AlbumSquare link={"/edit"} thumbnail={album.thumbnail === null ? "placeholder.png" : album.thumbnail} album={album} id={album.albumId} />
                    ))}
                </div>
                }
            </div>
        )
    }
}

export default Queue;