import React, { Component } from "react";
import API from '../utils/API';
import './Queue.css'
import AlbumSquare from './AlbumSquare'

class Library extends Component {

    state = {
      albums: [],
      album: []
    };

    componentDidMount() {
        this.getListenedAlbums();
    }
    
    async getListenedAlbums() {
        const albums = await API.getListenedAlbums();
        console.log(albums)
        this.setState({albums: albums.data})
    };

  

    render() {
        console.log('state ', this.state)
        return (
            <div id="queue-wrapper">
                <h1 className="page-header">Your Library</h1>
                {this.state.albums.length === 0  ? <p>...is empty.</p> : 
                <div className="queue-row row">
                    {this.state.albums.map(album => (
                        <AlbumSquare link={"/view"} thumbnail={album.thumbnail === null ? "placeholder.png" : album.thumbnail} album={album} id={album.albumId} />
                    ))}
                </div>
                }
            </div>
        )
    }
}

export default Library;