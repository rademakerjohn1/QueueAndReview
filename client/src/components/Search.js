import React, { Component } from "react";
import API from '../utils/API';
import AlbumView from './AlbumView';
import './Search.css'

class Search extends Component {

    state = {
        q: '',
        results: [],
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.getAlbums();
    }

    async getAlbums() {
        this.setState({results: []})
        const albums = await API.getAlbums(this.state.q.toLowerCase().split(" ").join("+"));
        const filteredAlbums = albums.data.album.filter(album => album.strReleaseFormat === "Album" || album.strReleaseFormat === "Mixtape/Street")
        await filteredAlbums.forEach(album => {
            console.log(album.strDescriptionEN)
             this.getTracks(album)
        })
    }

    async getTracks(album) {
        const trackList = [];
        const trackInfo = await API.getTracks(album.idAlbum)
        if (!trackInfo.data.track) { return }
        trackInfo.data.track.forEach(song => trackList.push(song.strTrack))
        album.tracks = trackList;
        let joined = this.state.results.concat(album)
        joined.sort((a,b) => {
           return a.intYearReleased - b.intYearReleased
        })
        await this.setState({results: joined})
    }

    async handleSave(album) {

        await API.saveAlbum({
            albumId: album.idAlbum,
            title: album.strAlbum,
            artist: album.strArtist,
            tracks: album.tracks,
            year: album.intYearReleased,
            thumbnail: album.strAlbumThumb,
            description: album.strDescriptionEN,
            allMusicID: album.strAllMusicID
        })
        window.location = "/queue"
    }

    render() {
        console.log('state ', this.state)
        return (
            <div id="search-wrapper">
                <form className="form-inline" id="search-form">
                    <div className="form-group">
                        <input type="text" className="form-control" name="q" aria-describedby="text" onChange={this.handleChange} />
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
                <div className="row" id="search-container">
                    {this.state.results.map(item => (
                        <AlbumView
                            key={item.idAlbum}
                            img={!item.strAlbumThumb ? "placeholder.png" : item.strAlbumThumb}
                            title={item.strAlbum}
                            artist={item.strArtist}
                            year={item.intYearReleased}
                            buttonClass={"save-btn"}
                            buttonAction={"Add To Queue"}
                            onClick={() => this.handleSave(item)}
                            description={item.strDescriptionEN}
                            idAlbum={item.idAlbum}
                            allMusicID={item.strAllMusicID}
                            trackList={item.tracks}
                        />
                    ))}
                </div>
            </div>
        )
    }

}

export default Search;